import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

const fadeInOut = trigger("fadeInOut", [
  state("void", style({
    transform: 'translate(0%, -15%)',
    opacity: 0,
  })),
  transition("void => *", [animate('250ms ease')]),
])

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fadeInOut]
})
export class HeroComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      nftAddress: [{address: ''}, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

}
