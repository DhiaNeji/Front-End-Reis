import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionNidComponent } from './correction-nid.component';

describe('CorrectionNidComponent', () => {
  let component: CorrectionNidComponent;
  let fixture: ComponentFixture<CorrectionNidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionNidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionNidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
