import {Component, Input, OnInit} from '@angular/core';
import {Nft} from "alchemy-sdk";

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})
export class NftCardComponent implements OnInit {
  @Input()
  public nft!: Nft;

  public get image(): string {
    return this.nft.media[0].gateway;
  }

  public get thumbnail(): string | undefined {
    return this.nft.media[0].thumbnail;
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.nft)
  }

}
