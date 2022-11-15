import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
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
