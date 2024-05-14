import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersalesComponent } from './offersales.component';

describe('OffersalesComponent', () => {
  let component: OffersalesComponent;
  let fixture: ComponentFixture<OffersalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersalesComponent]
    });
    fixture = TestBed.createComponent(OffersalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
