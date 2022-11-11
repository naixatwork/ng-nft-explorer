import {TestBed} from '@angular/core/testing';
import {TextureLoaderService} from './texture-loader.service';
import * as THREE from "three"
import {environment} from "#env/environment";

describe('TextureLoaderService', () => {
  let service: TextureLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextureLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a #textureloader that is an instance of THREE.TextureLoader', function () {
    expect(service['textureLoader']).toBeTruthy();
    expect(service['textureLoader']).toBeInstanceOf(THREE.TextureLoader);
  });

  it("should have a #load() that returns a THREE.Texture", () => {
    const texture = service.load(environment.portalBakedTexture);

    expect(service.load).toBeDefined();
    expect(texture).toBeTruthy();
    expect(texture).toBeInstanceOf(THREE.Texture);
  });
})
