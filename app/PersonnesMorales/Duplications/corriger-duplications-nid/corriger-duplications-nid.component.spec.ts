import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigerDuplicationsNidComponent } from './corriger-duplications-nid.component';

describe('CorrigerDuplicationsNidComponent', () => {
  let component: CorrigerDuplicationsNidComponent;
  let fixture: ComponentFixture<CorrigerDuplicationsNidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrigerDuplicationsNidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigerDuplicationsNidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
