import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMeassageComponent } from './validation-meassage.component';

describe('ValidationMeassageComponent', () => {
  let component: ValidationMeassageComponent;
  let fixture: ComponentFixture<ValidationMeassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationMeassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMeassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
