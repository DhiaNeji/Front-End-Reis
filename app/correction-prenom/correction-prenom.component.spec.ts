import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionPrenomComponent } from './correction-prenom.component';

describe('CorrectionPrenomComponent', () => {
  let component: CorrectionPrenomComponent;
  let fixture: ComponentFixture<CorrectionPrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionPrenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionPrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
