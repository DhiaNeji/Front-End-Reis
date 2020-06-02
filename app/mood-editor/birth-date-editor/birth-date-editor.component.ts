import { Component, OnInit, AfterViewInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ServiceService } from 'src/app/service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateVerifyComponent } from 'src/app/update-verify/update-verify.component';

@Component({
  selector: 'app-birth-date-editor',
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
  styleUrls: ['./birth-date-editor.component.scss']
})
export class BirthDateEditorComponent implements ICellEditorAngularComp, AfterViewInit {
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

        if(this.params.data.currentStep=='14')
        {
        this.params.data.birthdate=this.value
        this.params.api.getRowNode(this.params.data.id).setDataValue('step_14','true')
        this.params.api.stopEditing();
        }
        else
        {
          this.params.data.birthdate=this.value
          this.params.api.getRowNode(this.params.data.id).setDataValue('step_16','true')
          this.params.api.stopEditing();

        }
            })
          }

        }

      })
      }
      else
      {
        if(this.params.data.currentStep=='14')
        {
        this.params.data.birthdate=this.value
        this.params.api.getRowNode(this.params.data.id).setDataValue('step_14','true')
        this.params.api.stopEditing();
        }
        else
        {
          this.params.data.birthdate=this.value
          this.params.api.getRowNode(this.params.data.id).setDataValue('step_16','true')
          this.params.api.stopEditing();
        }
      }
    })
  }
  }
  validateInput(input):boolean
  {
    var Regex=RegExp('[12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$')
    return Regex.test(input)
  }
  getValue(): any {

    return this.value;
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

}
