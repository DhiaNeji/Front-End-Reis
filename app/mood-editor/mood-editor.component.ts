import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ServiceService } from '../service.service';
import { UpdateVerifyComponent } from '../update-verify/update-verify.component';
import { MatDialog } from '@angular/material/dialog';
import { resolve } from 'dns';


@Component({
  selector: 'editor-cell',
  template: `
   <input
      #input
      (keydown)="onKeyDown($event)"
      [(ngModel)]="value"
      style="width: 100%"
    />
    <button         (click)="onClick()"
>Valider</button>
    <button (click)="onCancel()">Annuler</button>
  `,
  styles: [
    `
      .mood {
        border-radius: 15px;
        border: 1px solid grey;
        background: #e6e6e6;
        padding: 15px;
        text-align: center;
        display: inline-block;
        outline: none;
      }

      .default {
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid transparent;
        padding: 4px;
      }

      .selected {
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid lightgreen;
        padding: 4px;
      }
    `,
  ],
})
export class MoodEditor implements ICellEditorAngularComp, AfterViewInit {
  private params: any;
  public value: number;
  private cancelBeforeStart: boolean = false;

  constructor(private service:ServiceService,private dialog:MatDialog)
  {

  }
  @ViewChild('input', { read: ViewContainerRef }) public input;

  agInit(params: any): void {
    this.params = params;
    this.value = this.params.value;

    // only start edit if key pressed is a number, not a letter
    this.cancelBeforeStart =
      params.charPress && '1234567890'.indexOf(params.charPress) < 0;
  }
  onCancel()
  {
    this.params.api.stopEditing();
  }
  onClick()
  {
    if(this.validateInput(this.value))
    {
    this.service.getByNid(this.value).subscribe(data=>{
      if(data.length>0)
      {
        const dialogRef = this.dialog.open(UpdateVerifyComponent, {
          width: '1030px',
          data: data
        });
        dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          for(var i=0;i<data.length;i++)
          {
            this.service.delete(data[i].id).subscribe(res=>
            {
              this.params.data.nid=this.value
              this.params.api.getRowNode(this.params.data.id).setDataValue('step_15','true')
              this.params.api.stopEditing();

            })
          }

        }

      })
      }
      else
      {
        this.params.data.nid=this.value
        this.params.api.getRowNode(this.params.data.id).setDataValue('step_15','true')
        this.params.api.stopEditing();
      }
    })
  }
  }
  validateInput(input):boolean
  {
    var Regex=RegExp('^[0-9]{6,7}[A-Z]{1}[A,B,D,N,P]{1}[M,N,C,P]{1}[0-9]{3}$')
    return Regex.test(input)
  }
  getValue(): any {

    return this.value;
  }

  isCancelBeforeStart(): boolean {
    return this.cancelBeforeStart;
  }

  // will reject the number if it greater than 1,000,000
  // not very practical, but demonstrates the method.
  isCancelAfterEnd(): boolean {
    this.verifyData().then(res=>{
      console.log(res)
    })
    console.log('xx')
    return true
  }
  verifyData():Promise<any>
  {
    return new Promise((resolve,reject)=>{
      this.service.getByNid(this.value).subscribe(success=>{
        resolve(success)
      })
    })
  }
  onKeyDown(event): void {
    if (!this.isKeyPressedNumeric(event)) {
      if (event.preventDefault) event.preventDefault();
    }
  }
  isPopup(): boolean {
    return true;
  }
  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  private getCharCodeFromEvent(event): any {
    event = event || window.event;
    return typeof event.which == 'undefined' ? event.keyCode : event.which;
  }

  private isCharNumeric(charStr): boolean {
    return true
  }

  private isKeyPressedNumeric(event): boolean {
    const charCode = this.getCharCodeFromEvent(event);
    const charStr = event.key ? event.key : String.fromCharCode(charCode);
    return this.isCharNumeric(charStr);
  }
}
