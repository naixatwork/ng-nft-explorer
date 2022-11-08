import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentPortalSceneComponent } from './development-portal-scene.component';

describe('PortalSceneComponent', () => {
  let component: DevelopmentPortalSceneComponent;
  let fixture: ComponentFixture<DevelopmentPortalSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentPortalSceneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentPortalSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
