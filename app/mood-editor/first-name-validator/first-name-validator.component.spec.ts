import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameValidatorComponent } from './first-name-validator.component';

describe('FirstNameValidatorComponent', () => {
  let component: FirstNameValidatorComponent;
  let fixture: ComponentFixture<FirstNameValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNameValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNameValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
