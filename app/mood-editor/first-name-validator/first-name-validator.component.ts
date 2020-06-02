import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirstNameEditorComponent } from '../first-name-editor/first-name-editor.component';

@Component({
  selector: 'app-first-name-validator',
  templateUrl: './first-name-validator.component.html',
  styleUrls: ['./first-name-validator.component.scss']
})
export class FirstNameValidatorComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FirstNameEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      console.log(data)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){}
  title = 'app';

}
