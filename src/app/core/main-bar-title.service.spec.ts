import { TestBed } from '@angular/core/testing';

import { MainBarTitleService } from './main-bar-title.service';

describe('MainBarTitleService', () => {
  let service: MainBarTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBarTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
