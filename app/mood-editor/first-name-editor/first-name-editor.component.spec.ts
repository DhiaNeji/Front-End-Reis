import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameEditorComponent } from './first-name-editor.component';

describe('FirstNameEditorComponent', () => {
  let component: FirstNameEditorComponent;
  let fixture: ComponentFixture<FirstNameEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNameEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
