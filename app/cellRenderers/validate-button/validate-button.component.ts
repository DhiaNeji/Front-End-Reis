import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-validate-button',
  template: `
  <span
    ><button
    *ngIf="!params.node.group"
      style="height: 20px"
      (click)="invokeParentMethod()"
      class="btn btn-info"
    >
      Valider
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
export class ValidateButtonComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    var Regex=null;
    switch (this.params.data.tin) {
      case 'Cin':
        Regex=RegExp('^[0-9]{8}$')
        break;
      case 'Passeport':
        Regex=RegExp('^[a-zA-Z0-9]{18,20}$')
        break;
      case 'Carte de séjour':
        Regex=RegExp('^[a-zA-Z0-9]{6,13}$')
        break;
      case 'Matricule fiscal':
        Regex=RegExp('^[0-9]{6,7}[A-Z]{1}[A,B,D,N,P]{1}[M,N,C,P]{1}[0-9]{3}$')
        break;
      case 'Identifiant unique':
        Regex=RegExp('^[0-9]{6,7}[A-Z]{1}$')
        break;
      case 'Registre de commerce':
        Regex=RegExp('^[A,B,C]{1}[0-9]{8,14}$')
        break;
      default:
        break;
  }
  if(Regex.test(this.params.data.nid))
  {
    this.params.api.getRowNode(this.params.data.id).setDataValue('step_6','true')
  }
  }

  refresh(): boolean {
    return false;
  }
}
