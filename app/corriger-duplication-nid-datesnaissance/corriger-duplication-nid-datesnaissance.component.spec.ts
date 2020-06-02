import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigerDuplicationNidDatesnaissanceComponent } from './corriger-duplication-nid-datesnaissance.component';

describe('CorrigerDuplicationNidDatesnaissanceComponent', () => {
  let component: CorrigerDuplicationNidDatesnaissanceComponent;
  let fixture: ComponentFixture<CorrigerDuplicationNidDatesnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrigerDuplicationNidDatesnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigerDuplicationNidDatesnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
