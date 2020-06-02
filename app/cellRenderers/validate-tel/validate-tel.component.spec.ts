import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTelComponent } from './validate-tel.component';

describe('ValidateTelComponent', () => {
  let component: ValidateTelComponent;
  let fixture: ComponentFixture<ValidateTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
