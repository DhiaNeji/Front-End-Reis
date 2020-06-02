import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommncerNettoyageCellRendererComponent } from './commncer-nettoyage-cell-renderer.component';

describe('CommncerNettoyageCellRendererComponent', () => {
  let component: CommncerNettoyageCellRendererComponent;
  let fixture: ComponentFixture<CommncerNettoyageCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommncerNettoyageCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommncerNettoyageCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
