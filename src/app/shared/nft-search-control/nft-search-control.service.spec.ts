import { TestBed } from '@angular/core/testing';

import { NftSearchControlService } from './nft-search-control.service';

describe('NftSearchControlService', () => {
  let service: NftSearchControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NftSearchControlService]
    });
    service = TestBed.inject(NftSearchControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
