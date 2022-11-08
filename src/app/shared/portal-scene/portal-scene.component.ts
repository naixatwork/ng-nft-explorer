import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

@Component({
  selector: 'app-portal-scene',
  templateUrl: './portal-scene.component.html',
  styleUrls: ['./portal-scene.component.scss']
})
export class PortalSceneComponent implements OnInit {
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
  }


  ngOnInit() {
    console.log(firefliesFragmentShader)
  }
}
