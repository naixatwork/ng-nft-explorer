import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "hero",
    loadChildren: () => import("./hero/hero.module").then(m => m.HeroModule)
  },
  {
    path: "nft",
    loadChildren: () => import("./nft/nft.module").then(m => m.NftModule)
  },
  {
    path: '**',
    redirectTo: "/hero"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

