import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSceneComponent } from './portal-scene.component';

describe('PortalSceneComponent', () => {
  let component: PortalSceneComponent;
  let fixture: ComponentFixture<PortalSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalSceneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
