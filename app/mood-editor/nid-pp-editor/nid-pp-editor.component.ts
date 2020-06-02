import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { UpdateVerifyComponent } from 'src/app/update-verify/update-verify.component';
@Component({
  selector: 'app-nid-pp-editor',
  template:
  `
  <input
     #input
     [(ngModel)]="value"
     style="width: 100%"
   />
   <button         (click)="onClick()"
>Valider</button>
   <button (click)="onCancel()">Annuler</button>
 `,
  styleUrls: ['./nid-pp-editor.component.scss']
})
export class NidPPEditorComponent implements ICellEditorAngularComp, AfterViewInit {
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
    this.service.get_customer(this.value,this.params.data.birthdate).subscribe(data=>{
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

            })
          }
          if(this.params.data.currentStep=='14')
        {
          this.params.data.nid=this.value
          this.params.api.getRowNode(this.params.data.id).setDataValue('step_14','true')
          console.log(this.params.data)
          this.params.api.stopEditing();

        }
        else
        {
        this.params.data.nid=this.value
        this.params.api.getRowNode(this.params.data.id).setDataValue('step_16','true')
        this.params.api.stopEditing();
        }
        }

      })
      }
      else
      {
        if(this.params.data.currentStep=='14')
        {
          this.params.data.nid=this.value
          this.params.api.getRowNode(this.params.data.id).setDataValue('step_14','true')
          console.log(this.params.data)
          this.params.api.stopEditing();

        }
        else
        {
        this.params.data.nid=this.value
        this.params.api.getRowNode(this.params.data.id).setDataValue('step_16','true')
        this.params.api.stopEditing();
        }
      }
    })
  }
  }
  validateInput(input):boolean
  {
    var Regex=RegExp('^[0-9]{8}$')
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
