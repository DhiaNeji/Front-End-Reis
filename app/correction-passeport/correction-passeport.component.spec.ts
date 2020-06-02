import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionPasseportComponent } from './correction-passeport.component';

describe('CorrectionPasseportComponent', () => {
  let component: CorrectionPasseportComponent;
  let fixture: ComponentFixture<CorrectionPasseportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionPasseportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionPasseportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
