import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionNumeroFaxComponent } from './correction-numero-fax.component';

describe('CorrectionNumeroFaxComponent', () => {
  let component: CorrectionNumeroFaxComponent;
  let fixture: ComponentFixture<CorrectionNumeroFaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionNumeroFaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionNumeroFaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
