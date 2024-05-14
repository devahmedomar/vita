import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblogComponent } from './singleblog.component';

describe('SingleblogComponent', () => {
  let component: SingleblogComponent;
  let fixture: ComponentFixture<SingleblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleblogComponent]
    });
    fixture = TestBed.createComponent(SingleblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
