import {Injectable} from '@angular/core';
import {Alchemy, Network, NftNamespace, OwnedNftsResponse} from "alchemy-sdk";
import {environment} from "#env/environment";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NftService {
  private nftApiStrategy!: NftNamespace;

  constructor() {
    const initializeAlchemy = () => {
      const config = {
        apikey: environment.alchemyApiKey,
        network: Network.ETH_MAINNET
      }

      this.nftApiStrategy = new Alchemy(config).nft;
    }

    initializeAlchemy();
  }

  public getNftsForOwner(ownerAddress: string): Observable<OwnedNftsResponse> {
    return from(this.nftApiStrategy.getNftsForOwner(ownerAddress));
  }

  // public getOwnerForNft(nftAddress: string, tokenId: string): void {
  //   from(this.nftApiStrategy.getOwnersForNft(nftAddress, tokenId)).subscribe(console.log)
  // }
}
