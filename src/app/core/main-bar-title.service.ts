import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainBarTitleService {
  public title$ = new BehaviorSubject<string>("");

  constructor() { }
}
