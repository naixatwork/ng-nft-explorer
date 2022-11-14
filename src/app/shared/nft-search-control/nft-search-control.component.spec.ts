import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftSearchControlComponent } from './nft-search-control.component';

describe('NftSearchControlComponent', () => {
  let component: NftSearchControlComponent;
  let fixture: ComponentFixture<NftSearchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftSearchControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftSearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
