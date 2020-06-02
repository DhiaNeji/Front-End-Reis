import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameValidatorComponent } from './last-name-validator.component';

describe('LastNameValidatorComponent', () => {
  let component: LastNameValidatorComponent;
  let fixture: ComponentFixture<LastNameValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNameValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNameValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
