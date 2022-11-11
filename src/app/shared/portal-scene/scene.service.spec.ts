import {TestBed} from '@angular/core/testing';
import {SceneService} from './scene.service';
import * as THREE from "three"
import {Mesh} from "three";

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

  it("should add an object3D to scene on #add()", () => {
    const mesh = new Mesh();
    const randomName = Math.random().toString();
    mesh.name = randomName;

    service.add(mesh);

    const foundMesh = service.getScene.children.find((object3D) => object3D.name === randomName);

    expect(service.getScene.children.length).withContext("scene's children should not be empty").not.toBe(0);
    expect(foundMesh).withContext("mesh has been added").toBeTruthy();
  })
});
