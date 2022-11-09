import {TestBed} from '@angular/core/testing';
import {SceneService} from './scene.service';
import * as THREE from "three"

describe('SceneService', () => {
  let service: SceneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneService]
    });
    service = TestBed.inject(SceneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a #scene that is instance of THREE.Scene', () => {
    expect(service["scene"]).toBeTruthy();
    expect(service["scene"]).toBeInstanceOf(THREE.Scene);
  });

  it('should have a #getScene that returns a scene', () => {
    expect(service["getScene"]).toBeTruthy();
    expect(service["getScene"]).toBeInstanceOf(THREE.Scene);
  });
});
