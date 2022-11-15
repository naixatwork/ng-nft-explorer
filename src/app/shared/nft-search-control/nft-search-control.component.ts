import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {MatFormFieldControl} from "@angular/material/form-field";
import {MatFormFieldAdapter} from "#shared/MatFormFieldAdapter/MatFormFieldAdapter";
import {FormBuilder} from "@angular/forms";
import {FormControlAdapter} from "#shared/FormControlAdapater/FormControlAdapter";
import {NftSearchControlService} from "#shared/nft-search-control/nft-search-control.service";
import {NftService} from "../../core/nft.service";
import {catchError, debounceTime, EMPTY, Subject, switchMap, takeUntil, tap} from "rxjs";
import {OwnedNftsResponse} from "alchemy-sdk";

@Component({
  selector: 'app-nft-search-control',
  templateUrl: './nft-search-control.component.html',
  styleUrls: ['./nft-search-control.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: NftSearchControlComponent,
      multi: true
    },
    {
      provide: NftSearchControlService
    }
  ]
})
export class NftSearchControlComponent extends MatFormFieldAdapter<{ address: string }> implements OnInit, OnDestroy {

  private subscribeAll = new Subject<null>();

  private _isLoading = false;
  public get isLoading(): NftSearchControlComponent["_isLoading"] {
    return this._isLoading;
  }

  public get hasIncorrectAddressError(): boolean {
    return this.form.hasError("incorrectAddress");
  }

  public loadedNftsCount = 0;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly injector: Injector,
    private readonly nftService: NftService
  ) {
    super(
      NftSearchControlComponent.name,
      new FormControlAdapter(formBuilder.group({address: ""})),
      injector
    )
    this.getNftsOnFormChange();
  }

  ngOnInit(): void {
  }

  private getNftsOnFormChange(): void {

    const onNftsLoaded = (ownedNftsResponse: OwnedNftsResponse) => {
      this.loadedNftsCount = ownedNftsResponse.totalCount;
      this._isLoading = false;
    }

    const onNftsFailed = () => {
      this._isLoading = false;

      const setIncorrectAddressError = () => {
        this.form.setErrors({"incorrectAddress": true});
      }

      if(this.form.touched) {
        setIncorrectAddressError();
      }
    }

    this.form.valueChanges
      .pipe(
        takeUntil(this.subscribeAll),
        tap(() => {
          this._isLoading = true;
          this.loadedNftsCount = 0;
        }),
        debounceTime(300),
        switchMap((value) => {
          return this.nftService.getNftsForOwner(value.address)
            .pipe(
              catchError(() => {
                onNftsFailed();
                return EMPTY;
              })
            );
        }),
      )
      .subscribe({
        next: onNftsLoaded,
      })
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.subscribeAll.next(null);
    this.subscribeAll.complete();
  }
}
