import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from "three";
import {SceneService} from "./scene.service";
import {TextureLoaderService} from "../../core/texture-loader.service";
import {GltfLoaderService} from "../../core/gltf-loader.service";
import {environment} from "#env/environment";
// @ts-ignore
import portalVertexShader from "#shared/portal-scene/shaders/portal/vertex.glsl";
// @ts-ignore
import portalFragmentShader from "#shared/portal-scene/shaders/portal/fragment.glsl";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import {loadSecondaryEntryPointInfoForApfV14} from "@angular/compiler-cli/ngcc/src/utils";

@Component({
  selector: 'app-portal-scene',
  templateUrl: './portal-scene.component.html',
  styleUrls: ['./portal-scene.component.scss'],
  providers: [SceneService]
})
export class PortalSceneComponent implements OnInit {
  @ViewChild("canvas")
  private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private bakedPortalTexture!: THREE.Texture;
  private bakedPortalMaterial!: THREE.MeshBasicMaterial;
  private poleLightMaterial!: THREE.MeshBasicMaterial;
  private portalLightMaterial!: THREE.ShaderMaterial;
  private portalMeshGroup!: THREE.Group;

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
            uTime: { value: 0 },
            uColorStart: { value: new THREE.Color("#ffffff") },
            uColorEnd: { value: new THREE.Color("#ffffff") }
          },
        vertexShader: portalVertexShader,
        fragmentShader: portalFragmentShader
      })
    }

    const initializePortalModel = (): void => {
      const onPortalGLTFLoad = (portalGLTF: GLTF) => {
        this.portalMeshGroup = portalGLTF.scene;

        const getMeshesFromGLTF = (): Record<string, THREE.Mesh> => {
          const bakedMesh = this.portalMeshGroup.children.find((child) => child.name === 'baked') as THREE.Mesh;
          const portalLightMesh = this.portalMeshGroup.children.find((child) => child.name === 'portalLight') as THREE.Mesh;
          const poleLightAMesh = this.portalMeshGroup.children.find((child) => child.name === 'poleLightA') as THREE.Mesh;
          const poleLightBMesh = this.portalMeshGroup.children.find((child) => child.name === 'poleLightB') as THREE.Mesh;

          return {bakedMesh, portalLightMesh, poleLightAMesh, poleLightBMesh};
        }

        const {bakedMesh, portalLightMesh, poleLightAMesh, poleLightBMesh} = getMeshesFromGLTF();

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

    initializeBakedPortalTexture();
    initializeBakedPortalMaterial();
    initializePoleLightMaterial();
    initializePortalLightMaterial();
    initializePortalModel();
  }



  ngOnInit(): void {
  }

}
