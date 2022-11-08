import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentPortalSceneComponent } from './portal-scene/development-portal-scene.component';



@NgModule({
    declarations: [
        DevelopmentPortalSceneComponent
    ],
    exports: [
        DevelopmentPortalSceneComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
