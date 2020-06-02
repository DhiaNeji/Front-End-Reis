import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NidPPEditorComponent } from './nid-pp-editor.component';

describe('NidPPEditorComponent', () => {
  let component: NidPPEditorComponent;
  let fixture: ComponentFixture<NidPPEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NidPPEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NidPPEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
