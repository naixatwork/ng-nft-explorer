import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NftRoutingModule} from './nft-routing.module';
import {NftComponent} from './nft.component';
import { NftExploreComponent } from './nft-explore/nft-explore.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "#shared/shared.module";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import { NftCardComponent } from './nft-card/nft-card.component';
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    NftComponent,
    NftExploreComponent,
    NftCardComponent,
  ],
  imports: [
    CommonModule,
    NftRoutingModule,
    MatSidenavModule,
    SharedModule,
    MatDividerModule,
    MatFormFieldModule,
    MatChipsModule
  ]
})
export class NftModule {
}
