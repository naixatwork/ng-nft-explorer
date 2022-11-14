import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroRoutingModule} from './hero-routing.module';
import {HeroComponent} from './hero.component';
import {SharedModule} from "#shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    HeroComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeroRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
  ],
  providers: []
})
export class HeroModule { }
