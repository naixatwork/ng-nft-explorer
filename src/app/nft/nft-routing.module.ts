import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NftComponent} from "./nft.component";
import {NftExploreComponent} from "./nft-explore/nft-explore.component";

const routes: Routes = [
  {
    path: "",
    component: NftComponent,
    children: [
      {
        path: ":address",
        component: NftExploreComponent
      },
    ]
  },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftRoutingModule { }
