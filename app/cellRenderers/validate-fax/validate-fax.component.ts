import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-validate-fax',
  templateUrl: './validate-fax.component.html',
  styleUrls: ['./validate-fax.component.scss']
})
export class ValidateFaxComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.api.getRowNode(this.params.data.id).setDataValue('step_13','true')
  }

  refresh(): boolean {
    return false;
  }
}
