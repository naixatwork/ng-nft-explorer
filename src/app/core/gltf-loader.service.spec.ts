import { TestBed } from '@angular/core/testing';

import { GltfLoaderService } from './gltf-loader.service';
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {environment} from "#env/environment";
import * as THREE from "three";

describe('GltfLoaderService', () => {
  let service: GltfLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GltfLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should have #draceLoader that is an instance of THREE.DRACOLoader", () => {
    expect(service["dracoLoader"]).toBeTruthy();
    expect(service["dracoLoader"]).toBeInstanceOf(DRACOLoader);
  })

  it("should have #gltfLoader that is an instance of THREE.GLTFLoader", () => {
    expect(service["gltfLoader"]).toBeTruthy();
    expect(service["gltfLoader"]).toBeInstanceOf(GLTFLoader);
  })

  it("should call #registerLoaders() on #constructor()", () => {
    const registerLoadersSpy = spyOn<any>(GltfLoaderService.prototype, "registerLoaders").and.stub();
    new GltfLoaderService();
    expect(registerLoadersSpy).toHaveBeenCalled();
  })

  it("should have #registerLoaders() that sets static draco loader path to #dracoLoader and pass it to #gltfLoader.setDRACOLoader()", () => {
    service["registerLoaders"]();

    // @ts-ignore
    expect(service["dracoLoader"].decoderPath).toBeTruthy();
    expect(service["gltfLoader"].dracoLoader).toBeTruthy();
  })

  it("should have #load() that loads a gltf mesh", (done) => {
    service.load(environment.portalGLTFFile, (gltf: GLTF) => {
      expect(gltf).toBeTruthy();
      expect(gltf.scene).withContext("has a scene that needs to add to the main scene").toBeTruthy();
      expect(gltf.scene).toBeInstanceOf(THREE.Group);
      done();
    })
  })
});
