import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalSceneComponent} from './portal-scene/portal-scene.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NftSearchControlComponent } from './nft-search-control/nft-search-control.component';
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MainBarComponent } from './main-bar/main-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import { DrawerWideDirective } from './drawer-wide.directive';


@NgModule({
  declarations: [
    PortalSceneComponent,
    NftSearchControlComponent,
    MainBarComponent,
    DrawerWideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
  ],
  exports: [
    PortalSceneComponent,
    FormsModule,
    ReactiveFormsModule,
    NftSearchControlComponent,
    MainBarComponent,
    DrawerWideDirective,
  ],
  providers: []
})
export class SharedModule {
}
