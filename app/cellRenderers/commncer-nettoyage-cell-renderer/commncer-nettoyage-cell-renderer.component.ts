import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-commncer-nettoyage-cell-renderer',
  template: `
    <span
      ><button
      *ngIf="!params.node.group"
        style="height: 20px"
        (click)="invokeParentMethod()"
        class="btn btn-info"
      >
        Préparer les données
      </button></span
    >
  `,
  styles: [
    `
      .btn {
        line-height: 0.1;
      }
    `,
  ],
})
export class CommncerNettoyageCellRendererComponent implements ICellRendererAngularComp {

  constructor() {
    console.log('qsdsd')
  }

  ngOnInit(): void {
  }
  public params: any;

  agInit(params: any): void {
    console.log("dqsd")
    this.params = params;
  }

  public invokeParentMethod() {
//    this.params.api.getRowNode(this.params.data.id).setDataValue('to_delete',true)
  }

  refresh(): boolean {
    return false;
  }
}
