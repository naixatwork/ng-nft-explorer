import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {PortalSceneComponent} from './portal-scene.component';
import * as THREE from "three";

describe('PortalSceneComponent', () => {
  let component: PortalSceneComponent;
  let fixture: ComponentFixture<PortalSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortalSceneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortalSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(PortalSceneComponent)
  });

  it("should have a #canvasRef that refers to canvas element", () => {
    expect(component["canvasRef"]).toBeTruthy();
  })

  it("should have a #canvas that returns a nativeElement", () => {
    expect(component["canvas"]).withContext("to have a value").toBeTruthy();
  })

  it("should initialize #bakedPortalTexture on #constructor()", () => {
    expect(component["bakedPortalTexture"]).toBeTruthy();
    expect(component["bakedPortalTexture"].flipY).withContext("shouldn't flip on Y axis").toBeFalse();
    expect(component["bakedPortalTexture"].encoding).withContext("should use sRGBEncoding").toBe(THREE.sRGBEncoding);
  })

  it("should initialize #bakedPortalMaterial on #constructor()", () => {
    expect(component["bakedPortalMaterial"]).toBeTruthy();
    expect(component["bakedPortalMaterial"].map).withContext("apply texture to the material").toBe(component["bakedPortalTexture"])
  })

  it("should initialize #poleLightMaterial on #constructor()", () => {
    expect(component["poleLightMaterial"]).toBeTruthy();
  })

  it("should initialize #portalLightMaterial on #constructor()", () => {
    const material = component["portalLightMaterial"];

    expect(material).toBeTruthy();
    expect(material.vertexShader).withContext("has a valid vertexShader").toBeTruthy();
    expect(material.fragmentShader).withContext("has a valid fragmentShader").toBeTruthy();
    expect(material.uniforms["uTime"]).withContext("has a uTime uniform with value of 0").toEqual({value: 0});
  })

  it("should initialize #portal")
});
