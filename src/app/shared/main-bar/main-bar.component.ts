import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  public toggleMenu(): void {
    this._menuToggle = !this._menuToggle;
  }

  ngOnInit(): void {
  }

}
