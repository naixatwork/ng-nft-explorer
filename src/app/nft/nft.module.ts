import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NftRoutingModule} from './nft-routing.module';
import {NftComponent} from './nft.component';
import { NftExploreComponent } from './nft-explore/nft-explore.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "#shared/shared.module";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    NftComponent,
    NftExploreComponent,
  ],
  imports: [
    CommonModule,
    NftRoutingModule,
    MatSidenavModule,
    SharedModule,
    MatDividerModule
  ]
})
export class NftModule {
}
