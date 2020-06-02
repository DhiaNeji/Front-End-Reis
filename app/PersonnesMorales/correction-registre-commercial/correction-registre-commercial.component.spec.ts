import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionRegistreCommercialComponent } from './correction-registre-commercial.component';

describe('CorrectionRegistreCommercialComponent', () => {
  let component: CorrectionRegistreCommercialComponent;
  let fixture: ComponentFixture<CorrectionRegistreCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionRegistreCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionRegistreCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
