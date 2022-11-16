import { Component, OnInit } from '@angular/core';
import {MainBarTitleService} from "../../core/main-bar-title.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NftService} from "../../core/nft.service";
import {map, Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {OwnedNft, OwnedNftsResponse} from "alchemy-sdk";

@Component({
  selector: 'app-nft-explore',
  templateUrl: './nft-explore.component.html',
  styleUrls: ['./nft-explore.component.scss']
})
export class NftExploreComponent implements OnInit {
  public form!: FormGroup;
  public ownedNfts$ = new Subject<OwnedNft[]>();

  constructor(
    private readonly mainBarTitleService: MainBarTitleService,
    private readonly formBuilder: FormBuilder,
    private readonly nftService: NftService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    const createForm = () => {
      this.form = this.formBuilder.group({
        ethereumAddress: [{address: ''}]
      })
    }

    const setMainBarTitle = () => {
      this.mainBarTitleService.title$.next("Search NFTs");
    }

    setMainBarTitle();
    createForm();
  }

  ngOnInit(): void {
    const getNftsFromAddress = (address: string) => {
      const updateOwnedNfts = (response: OwnedNftsResponse) => {
        this.ownedNfts$.next(response.ownedNfts);
      }

      this.nftService.getNftsForOwner(address).subscribe({
        next: updateOwnedNfts
      })
    }

    const updateFormFromRouteParam = () => {
      const updateForm = (value: string) => {
        this.form.patchValue({ethereumAddress: {address: value}})
      }

      this.activatedRoute.params
        .pipe(
          map((param) => {
            return param["address"];
          })
        )
        .subscribe({
          next: updateForm
        })
    }

    const getNftsOnFormValueChange = () => {
      this.form.valueChanges
        .pipe(
          map((value) => {
            return value["ethereumAddress"].address;
          })
        )
        .subscribe({
          next: getNftsFromAddress
        })
    }

    getNftsOnFormValueChange();
    updateFormFromRouteParam();

  }

}
