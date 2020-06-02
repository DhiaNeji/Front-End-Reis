import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionNumeroTelComponent } from './correction-numero-tel.component';

describe('CorrectionNumeroTelComponent', () => {
  let component: CorrectionNumeroTelComponent;
  let fixture: ComponentFixture<CorrectionNumeroTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionNumeroTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionNumeroTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
