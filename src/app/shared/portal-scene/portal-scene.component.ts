import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from "three";
import {SceneService} from "./scene.service";
import {TextureLoaderService} from "../../core/texture-loader.service";
import {GltfLoaderService} from "../../core/gltf-loader.service";
import {environment} from "#env/environment";
// @ts-ignore
import firefliesVertexShader from "#shared/portal-scene/shaders/fireflies/vertex.glsl";
// @ts-ignore
import firefliesFragmentShader from "#shared/portal-scene/shaders/fireflies/fragment.glsl";
// @ts-ignore
import portalVertexShader from "#shared/portal-scene/shaders/portal/vertex.glsl";
// @ts-ignore
import portalFragmentShader from "#shared/portal-scene/shaders/portal/fragment.glsl";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


@Component({
  selector: 'app-portal-scene',
  templateUrl: './portal-scene.component.html',
  styleUrls: ['./portal-scene.component.scss'],
  providers: [SceneService]
})
export class PortalSceneComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas")
  private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private bakedPortalTexture!: THREE.Texture;
  private bakedPortalMaterial!: THREE.MeshBasicMaterial;
  private poleLightMaterial!: THREE.MeshBasicMaterial;
  private portalLightMaterial!: THREE.ShaderMaterial;
  private fireFliesMaterial!: THREE.ShaderMaterial;


  @Input()
  public width = window.innerWidth;

  @Input()
  public height = window.innerHeight;

  private camera!: THREE.PerspectiveCamera;

  private renderer!: THREE.WebGLRenderer;

  private clock = new THREE.Clock();

  constructor(
    private readonly sceneService: SceneService,
    private readonly textureService: TextureLoaderService,
    private readonly gltfLoaderService: GltfLoaderService
  ) {
    const initializeBakedPortalTexture = (): void => {
      this.bakedPortalTexture = this.textureService.load(environment.portalBakedTexture);
      this.bakedPortalTexture.flipY = false;
      this.bakedPortalTexture.encoding = THREE.sRGBEncoding;
    }

    const initializeBakedPortalMaterial = (): void => {
      this.bakedPortalMaterial = new THREE.MeshBasicMaterial({map: this.bakedPortalTexture})
    }

    const initializePoleLightMaterial = (): void => {
      this.poleLightMaterial = new THREE.MeshBasicMaterial({color: 0xffffe5})
    }

    const initializePortalLightMaterial = (): void => {
      this.portalLightMaterial = new THREE.ShaderMaterial({
        uniforms:
          {
            uTime: {value: 0},
            uColorStart: {value: new THREE.Color("#000000")},
            uColorEnd: {value: new THREE.Color("#ffffff")}
          },
        vertexShader: portalVertexShader,
        fragmentShader: portalFragmentShader
      })
    }

    const initializePortalModel = (): void => {
      const onPortalGLTFLoad = (portalGLTF: GLTF) => {
        this.sceneService.add(portalGLTF.scene)

        const getMeshesFromGLTF = (portalGLTF: GLTF): Record<string, THREE.Mesh> => {
          const bakedMesh = portalGLTF.scene.children.find((child) => child.name === 'baked') as THREE.Mesh;
          const portalLightMesh = portalGLTF.scene.children.find((child) => child.name === 'portalLight') as THREE.Mesh;
          const poleLightAMesh = portalGLTF.scene.children.find((child) => child.name === 'poleLightA') as THREE.Mesh;
          const poleLightBMesh = portalGLTF.scene.children.find((child) => child.name === 'poleLightB') as THREE.Mesh;

          return {bakedMesh, portalLightMesh, poleLightAMesh, poleLightBMesh};
        }

        const {bakedMesh, portalLightMesh, poleLightAMesh, poleLightBMesh} = getMeshesFromGLTF(portalGLTF);

        const setMeshesMaterial = (): void => {
          bakedMesh.material = this.bakedPortalMaterial;
          portalLightMesh.material = this.portalLightMaterial;
          poleLightAMesh.material = this.poleLightMaterial;
          poleLightBMesh.material = this.poleLightMaterial;
        }

        setMeshesMaterial();
      }

      this.gltfLoaderService.load(environment.portalGLTFFile, onPortalGLTFLoad)
    }

    const initializeCamera = () => {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);

      const setCameraPosition = () => {
        this.camera.position.x = 4;
        this.camera.position.y = 2;
        this.camera.position.z = 4;
      }

      setCameraPosition();
      this.sceneService.add(this.camera);
    }

    const initializeFireFlies = () => {
      const firefliesGeometry = new THREE.BufferGeometry();
      const firefliesCount = 30;
      const positionArray = new Float32Array(firefliesCount * 3);
      const scaleArray = new Float32Array(firefliesCount);

      const setFireFliesPositionsRandomly = () => {
        for (let i = 0; i < firefliesCount; i++) {
          positionArray[i * 3 + 0] = (Math.random() - 0.5) * 4;
          positionArray[i * 3 + 1] = Math.random() * 1.5;
          positionArray[i * 3 + 2] = (Math.random() - 0.5) * 4;

          scaleArray[i] = Math.random();
        }
      }

      setFireFliesPositionsRandomly();

      const setFireFliesGeometryAttributes = () => {
        firefliesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
        firefliesGeometry.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1));
      }

      setFireFliesGeometryAttributes();

      this.fireFliesMaterial = new THREE.ShaderMaterial({
        uniforms:
          {
            uTime: {value: 0},
            uPixelRatio: {value: Math.min(window.devicePixelRatio, 2)},
            uSize: {value: 100}
          },
        vertexShader: firefliesVertexShader,
        fragmentShader: firefliesFragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })

      const fireflies = new THREE.Points(firefliesGeometry, this.fireFliesMaterial);
      this.sceneService.add(fireflies);
    }

    initializeBakedPortalTexture();
    initializeBakedPortalMaterial();
    initializePoleLightMaterial();
    initializePortalLightMaterial();
    initializePortalModel();
    initializeCamera();
    initializeFireFlies();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const initializeRenderer = () => {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true
      })

      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    const controls = new OrbitControls(this.camera, this.canvas)
    controls.enableDamping = true;

    initializeRenderer();

    const loop = () => {
      const elapsedTime = this.clock.getElapsedTime();

      this.portalLightMaterial.uniforms["uTime"].value = elapsedTime;
      this.fireFliesMaterial.uniforms["uTime"].value = elapsedTime

      controls.update();
      this.renderer.render(this.sceneService.getScene, this.camera);

      window.requestAnimationFrame(loop)
    }

    loop();
  }
}
