import { Injectable } from '@angular/core';
import * as THREE from "three"


@Injectable({
  providedIn: 'root'
})
export class TextureService {
  private textureLoader = new THREE.TextureLoader();

  public load(url: string): THREE.Texture {
    return this.textureLoader.load(url);
  }

  constructor() { }
}
