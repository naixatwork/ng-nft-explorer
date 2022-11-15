import { TestBed } from '@angular/core/testing';

import { NftService } from './nft.service';
import {Observable} from "rxjs";
import {environment} from "#env/environment";

describe('NftService', () => {
  let service: NftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize #alchemy on #contractor()', () => {
    const nftApi = service["nftApiStrategy"];

    expect(nftApi).toBeTruthy();
  });

  it("should have #getNftsForOwner() that returns an Observable<OwnedNftsResponse>", (done) => {
    const nftForOwner$ = service.getNftsForOwner(environment.testNftOwnerAddress);
    expect(nftForOwner$).toBeTruthy();
    expect(nftForOwner$).toBeInstanceOf(Observable);

    nftForOwner$.subscribe((nfts) => {
      expect(nfts).toBeTruthy();
      done()
    })
  })
});
