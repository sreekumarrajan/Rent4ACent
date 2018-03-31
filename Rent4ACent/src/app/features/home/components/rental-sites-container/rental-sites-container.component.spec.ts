import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalSitesContainerComponent } from './rental-sites-container.component';

describe('RentalSitesContainerComponent', () => {
  let component: RentalSitesContainerComponent;
  let fixture: ComponentFixture<RentalSitesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalSitesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalSitesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
