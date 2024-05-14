import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenComponent } from './green.component';

describe('GreenComponent', () => {
  let component: GreenComponent;
  let fixture: ComponentFixture<GreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenComponent]
    });
    fixture = TestBed.createComponent(GreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
