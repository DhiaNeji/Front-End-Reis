import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-component',
  templateUrl: './progress-component.component.html',
  styleUrls: ['./progress-component.component.scss']
})
export class ProgressComponentComponent implements OnInit {

  @Input() width:number
  @Input() step:string
  @Input() context:string
  @Input() class:string
  constructor() { }

  ngOnInit(): void {
  }

}
