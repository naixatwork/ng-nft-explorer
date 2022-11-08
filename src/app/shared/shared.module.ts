import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalSceneComponent } from './portal-scene/portal-scene.component';



@NgModule({
    declarations: [
        PortalSceneComponent
    ],
    exports: [
        PortalSceneComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
