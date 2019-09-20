import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksForOrderComponent } from './thanks-for-order.component';

describe('ThanksForOrderComponent', () => {
  let component: ThanksForOrderComponent;
  let fixture: ComponentFixture<ThanksForOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksForOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksForOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
