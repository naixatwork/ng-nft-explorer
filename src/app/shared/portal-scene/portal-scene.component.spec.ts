import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalSceneComponent } from './portal-scene.component';
import * as THREE from "three";

describe('PortalSceneComponent', () => {
  let component: PortalSceneComponent;
  let fixture: ComponentFixture<PortalSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalSceneComponent ]
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
});
