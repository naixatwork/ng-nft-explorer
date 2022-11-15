import { Component, OnInit } from '@angular/core';
import {MainBarTitleService} from "../../core/main-bar-title.service";

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  private _menuToggle = true;
  public get menuToggle(): boolean {
    return this._menuToggle;
  }

  constructor(
    public readonly mainBarTitleService: MainBarTitleService
  ) { }

  public toggleMenu(): void {
    this._menuToggle = !this._menuToggle;
  }

  ngOnInit(): void {
  }

}
