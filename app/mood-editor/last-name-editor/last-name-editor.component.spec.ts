import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameEditorComponent } from './last-name-editor.component';

describe('LastNameEditorComponent', () => {
  let component: LastNameEditorComponent;
  let fixture: ComponentFixture<LastNameEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNameEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
