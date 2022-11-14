import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalSceneComponent} from './portal-scene/portal-scene.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NftSearchControlComponent } from './nft-search-control/nft-search-control.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    PortalSceneComponent,
    NftSearchControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    PortalSceneComponent,
    FormsModule,
    ReactiveFormsModule,
    NftSearchControlComponent,
  ],
  providers: []
})
export class SharedModule {
}
