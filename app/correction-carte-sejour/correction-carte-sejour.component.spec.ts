import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionCarteSejourComponent } from './correction-carte-sejour.component';

describe('CorrectionCarteSejourComponent', () => {
  let component: CorrectionCarteSejourComponent;
  let fixture: ComponentFixture<CorrectionCarteSejourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionCarteSejourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionCarteSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
