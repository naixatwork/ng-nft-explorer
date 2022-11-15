import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

const controlHints = trigger("controlHints", [
  state("void", style({
    transform: 'translate(0%, -15%)',
    opacity: 0,
  })),
  transition("void => *", [animate('250ms ease')]),
])

const titleFadeIn = trigger("titleFadeIn", [
  transition(
    ":enter", [
    style({
      opacity: 0,
    }),
    animate("300ms ease-in",
      style({
        opacity: 1,
      })
    )
  ])
])

const controlFadeIn = trigger("controlFadeIn", [
  transition(
    ":enter", [
      style({
        opacity: 0,
      }),
      animate("300ms 300ms ease-in",
        style({
          opacity: 1,
        })
      )
    ])
])

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [controlHints, titleFadeIn, controlFadeIn]
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
