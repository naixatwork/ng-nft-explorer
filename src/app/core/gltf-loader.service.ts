import {Injectable} from '@angular/core';
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {environment} from "#env/environment";

@Injectable({
  providedIn: 'root'
})
export class GltfLoaderService {
  private readonly dracoLoader = new DRACOLoader();
  private readonly gltfLoader = new GLTFLoader();

  private registerLoaders(): void {
    this.dracoLoader.setDecoderPath(environment.dracoLoaderPath);
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
  }

  public load(url: string, onLoad: Function): void {
    this.gltfLoader.load(url, (gltf) => {
      onLoad(gltf);
    });
  }

  constructor() {
    this.registerLoaders();
  }
}
