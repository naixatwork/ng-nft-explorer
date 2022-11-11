import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevelopmentPortalSceneComponent} from './portal-scene/development-portal-scene.component';
import {PortalSceneComponent} from './portal-scene/portal-scene.component';


@NgModule({
  declarations: [
    DevelopmentPortalSceneComponent,
    PortalSceneComponent
  ],
    exports: [
        DevelopmentPortalSceneComponent,
        PortalSceneComponent
    ],
  imports: [
    CommonModule
  ],
  providers: [
  ]
})
export class SharedModule {
}
