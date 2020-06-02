import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { MatDialog } from '@angular/material/dialog';
import { LastNameValidatorComponent } from '../last-name-validator/last-name-validator.component';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-last-name-editor',
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
export class LastNameEditorComponent implements  ICellEditorAngularComp, AfterViewInit {
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
  }
  onCancel()
  {
    this.params.api.stopEditing();
  }
  onClick()
  {
    if(this.validateInput(this.value))
    {
          this.params.api.gridOptionsWrapper.gridOptions.overlayLoadingTemplate='<span class="ag-overlay-loading-center">Verification</span>';
          this.params.api.showLoadingOverlay()
      this.service.validatePrenom(this.value).subscribe(res=>{

        this.params.data.first_name=this.value
        this.params.api.getRowNode(this.params.data.id).setDataValue('step_11','true')
        this.params.api.stopEditing();
        this.params.api.hideOverlay()
      },err=>{
        this.params.api.hideOverlay()
      const dialogRef = this.dialog.open(LastNameValidatorComponent, {
        width: '350px',
        data: this.value
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.params.data.first_name=this.value
          this.params.api.getRowNode(this.params.data.id).setDataValue('step_11','true')
          this.params.api.stopEditing();
        }
        else
        {

        }
      })
      })

  }
}
  validateInput(input):boolean
  {
    var Regex=RegExp('^[\\S]{3,20}$')
    console.log(Regex.test(input))
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
  destroy()
  {

  }
}
