import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalSceneComponent} from './portal-scene/portal-scene.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NftSearchControlComponent} from './nft-search-control/nft-search-control.component';
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MainBarComponent} from './main-bar/main-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {SideBarComponent} from './side-bar/side-bar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [
    PortalSceneComponent,
    NftSearchControlComponent,
    MainBarComponent,
    SideBarComponent
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
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  exports: [
    PortalSceneComponent,
    FormsModule,
    ReactiveFormsModule,
    NftSearchControlComponent,
    MainBarComponent,
    SideBarComponent,
  ],
  providers: []
})
export class SharedModule {
}
