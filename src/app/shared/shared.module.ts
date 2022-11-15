import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalSceneComponent} from './portal-scene/portal-scene.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NftSearchControlComponent } from './nft-search-control/nft-search-control.component';
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


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
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
