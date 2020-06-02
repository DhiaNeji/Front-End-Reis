import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-validate-tel',
  templateUrl: './validate-tel.component.html',
  styleUrls: ['./validate-tel.component.scss']
})
export class ValidateTelComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.api.getRowNode(this.params.data.id).setDataValue('step_12','true')
  }

  refresh(): boolean {
    return false;
  }
}
