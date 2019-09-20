import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBilboardComponent } from './header-bilboard.component';

describe('HeaderBilboardComponent', () => {
  let component: HeaderBilboardComponent;
  let fixture: ComponentFixture<HeaderBilboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBilboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBilboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
