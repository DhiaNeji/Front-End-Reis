import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDateEditorComponent } from './birth-date-editor.component';

describe('BirthDateEditorComponent', () => {
  let component: BirthDateEditorComponent;
  let fixture: ComponentFixture<BirthDateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthDateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthDateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
