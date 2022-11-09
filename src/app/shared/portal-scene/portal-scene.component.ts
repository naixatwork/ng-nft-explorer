import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from "three";
import {SceneService} from "./scene.service";

@Component({
  selector: 'app-portal-scene',
  templateUrl: './portal-scene.component.html',
  styleUrls: ['./portal-scene.component.scss'],
  providers: [SceneService]
})
export class PortalSceneComponent implements OnInit {
  @ViewChild("canvas")
  private canvasRef!: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor(private readonly sceneService: SceneService) {
  }

  ngOnInit(): void {
  }

}
