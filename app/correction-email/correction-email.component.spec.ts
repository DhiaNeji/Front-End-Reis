import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionEmailComponent } from './correction-email.component';

describe('CorrectionEmailComponent', () => {
  let component: CorrectionEmailComponent;
  let fixture: ComponentFixture<CorrectionEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
