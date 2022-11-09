import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js'
// @ts-ignore
import firefliesVertexShader from './shaders/fireflies/vertex.glsl'
// @ts-ignore
import firefliesFragmentShader from './shaders/fireflies/fragment.glsl'
// @ts-ignore
import portalVertexShader from './shaders/portal/vertex.glsl'
// @ts-ignore
import portalFragmentShader from './shaders/portal/fragment.glsl'

@Component({
  selector: 'app-development-portal-scene',
  templateUrl: './development-portal-scene.component.html',
  styleUrls: ['./development-portal-scene.component.scss']
})
export class DevelopmentPortalSceneComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private scene = new THREE.Scene()
  private textureLoader = new THREE.TextureLoader()

  // Draco loader
  dracoLoader = new DRACOLoader()


  // GLTF loader
  gltfLoader = new GLTFLoader()


  constructor() {

  }

  private addToScene() {
    this.dracoLoader.setDecoderPath('assets/static/draco/')
    this.gltfLoader.setDRACOLoader(this.dracoLoader)

    /**
     * Textures
     */
    const bakedTexture = this.textureLoader.load('assets/static/baked.jpg')
    bakedTexture.flipY = false
    bakedTexture.encoding = THREE.sRGBEncoding

    /**
     * Materials
     */
// Baked material
    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })

// Pole light material
    const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 })

    const portalLightMaterial = new THREE.ShaderMaterial({
      uniforms:
        {
          uTime: { value: 0 },
          uColorStart: { value: new THREE.Color("#ffffff") },
          uColorEnd: { value: new THREE.Color("#ffffff") }
        },
      vertexShader: portalVertexShader,
      fragmentShader: portalFragmentShader
    })

    this.gltfLoader.load(
      'assets/static/portal.glb',
      (gltf) =>
      {
        this.scene.add(gltf.scene)
        console.log(gltf)

        // Get each object
        const bakedMesh = gltf.scene.children.find((child) => child.name === 'baked')
        const portalLightMesh = gltf.scene.children.find((child) => child.name === 'portalLight')
        const poleLightAMesh = gltf.scene.children.find((child) => child.name === 'poleLightA')
        const poleLightBMesh = gltf.scene.children.find((child) => child.name === 'poleLightB')

        // Apply materials
        // @ts-ignore
        bakedMesh.material = bakedMaterial
        // @ts-ignore
        portalLightMesh.material = portalLightMaterial
        // @ts-ignore
        poleLightAMesh.material = poleLightMaterial
        // @ts-ignore
        poleLightBMesh.material = poleLightMaterial
      }
    )
  }

  ngAfterViewInit() {
    this.addToScene();
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 4
    camera.position.y = 2
    camera.position.z = 4
    this.scene.add(camera)

// Controls
    const controls = new OrbitControls(camera, this.canvas)
    controls.enableDamping = true;

    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    })
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const clock = new THREE.Clock()

    const tick = () =>
    {
      const elapsedTime = clock.getElapsedTime()

      // Update materials
      // this.portalLightMaterial.uniforms.uTime.value = elapsedTime

      // Update controls
      controls.update()

      // Render
      renderer.render(this.scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()

  }


  ngOnInit() {
    console.log(firefliesFragmentShader)
  }
}
