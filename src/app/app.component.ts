import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// @ts-ignore
import firefliesVertexShader from './shaders/fireflies/vertex.glsl'
// @ts-ignore
import firefliesFragmentShader from './shaders/fireflies/fragment.glsl'
// @ts-ignore
import portalVertexShader from './shaders/portal/vertex.glsl'
// @ts-ignore
import portalFragmentShader from './shaders/portal/fragment.glsl'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  ngOnInit() {
    console.log(firefliesFragmentShader)
  }
}
