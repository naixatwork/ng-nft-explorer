import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "hero",
    loadChildren: () => import("./hero/hero.module").then(m => m.HeroModule)
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

