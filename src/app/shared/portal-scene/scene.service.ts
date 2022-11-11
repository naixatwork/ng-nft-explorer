import {Injectable} from '@angular/core';
import * as THREE from "three"

@Injectable()
export class SceneService {
  private readonly scene = new THREE.Scene();

  public get getScene(): SceneService["scene"] {
    return this.scene.clone();
  }

  public add(...object3D: THREE.Object3D[]): void {
    this.scene.add(...object3D);
  }

  constructor() {
  }
}
