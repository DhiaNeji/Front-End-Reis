import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionDatesnaissancesComponent } from './correction-datesnaissances.component';

describe('CorrectionDatesnaissancesComponent', () => {
  let component: CorrectionDatesnaissancesComponent;
  let fixture: ComponentFixture<CorrectionDatesnaissancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionDatesnaissancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionDatesnaissancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
