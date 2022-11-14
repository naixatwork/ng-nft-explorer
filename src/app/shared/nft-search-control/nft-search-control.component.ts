import {Component, Injector, OnInit} from '@angular/core';
import {MatFormFieldControl} from "@angular/material/form-field";
import {MatFormFieldAdapter} from "#shared/MatFormFieldAdapter/MatFormFieldAdapter";
import {FormBuilder, Validators} from "@angular/forms";
import {FormControlAdapter} from "#shared/FormControlAdapater/FormControlAdapter";

@Component({
  selector: 'app-nft-search-control',
  templateUrl: './nft-search-control.component.html',
  styleUrls: ['./nft-search-control.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: NftSearchControlComponent,
      multi: true
    }
  ]
})
export class NftSearchControlComponent extends MatFormFieldAdapter<{ value: string }> implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly injector: Injector
  ) {
    super(
      NftSearchControlComponent.name,
      new FormControlAdapter(formBuilder.group({value: ""})),
      injector
    )
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.log)
  }

}
