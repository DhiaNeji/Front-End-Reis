import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionNomComponent } from './correction-nom.component';

describe('CorrectionNomComponent', () => {
  let component: CorrectionNomComponent;
  let fixture: ComponentFixture<CorrectionNomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionNomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
