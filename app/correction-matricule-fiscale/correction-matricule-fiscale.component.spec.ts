import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionMatriculeFiscaleComponent } from './correction-matricule-fiscale.component';

describe('CorrectionMatriculeFiscaleComponent', () => {
  let component: CorrectionMatriculeFiscaleComponent;
  let fixture: ComponentFixture<CorrectionMatriculeFiscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionMatriculeFiscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionMatriculeFiscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
