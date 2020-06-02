import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionNationalitesComponent } from './correction-nationalites.component';

describe('CorrectionNationalitesComponent', () => {
  let component: CorrectionNationalitesComponent;
  let fixture: ComponentFixture<CorrectionNationalitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionNationalitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionNationalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
