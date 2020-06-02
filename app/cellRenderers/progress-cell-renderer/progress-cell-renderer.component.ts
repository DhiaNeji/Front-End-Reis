import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-progress-cell-renderer',
  templateUrl: './progress-cell-renderer.component.html',
  styleUrls: ['./progress-cell-renderer.component.scss']
})
export class ProgressCellRendererComponent  implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.api.getRowNode(this.params.data.id).setDataValue('to_delete',true)
  }

  refresh(): boolean {
    return false;
  }
}
