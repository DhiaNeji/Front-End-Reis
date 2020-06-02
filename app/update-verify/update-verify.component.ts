import { Component, OnInit,Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-verify',
  templateUrl: './update-verify.component.html',
  styleUrls: ['./update-verify.component.scss']
})
export class UpdateVerifyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UpdateVerifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      console.log(data)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){}
  title = 'app';

  columnDefs = [
      {headerName: 'id', field: 'id' },
      {headerName: 'nid', field: 'nid' },
      {headerName: 'birthdate', field: 'birthdate'},
      {headerName: 'first_name', field: 'first_name'},
      {headerName: 'last_name', field: 'last_name'},
  ];

  rowData = this.data
}
