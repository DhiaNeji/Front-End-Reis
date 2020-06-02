import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigerDuplicationWholeNameComponent } from './corriger-duplication-whole-name.component';

describe('CorrigerDuplicationWholeNameComponent', () => {
  let component: CorrigerDuplicationWholeNameComponent;
  let fixture: ComponentFixture<CorrigerDuplicationWholeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrigerDuplicationWholeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigerDuplicationWholeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
