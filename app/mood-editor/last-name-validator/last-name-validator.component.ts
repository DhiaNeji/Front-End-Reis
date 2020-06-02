import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LastNameEditorComponent } from '../last-name-editor/last-name-editor.component';

@Component({
  selector: 'app-last-name-validator',
  templateUrl: './last-name-validator.component.html',
  styleUrls: ['./last-name-validator.component.scss']
})
export class LastNameValidatorComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LastNameEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      console.log(data)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){}
  title = 'app';

}
