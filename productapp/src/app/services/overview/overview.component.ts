import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  heading:any = {color:"yellow",margin:"auto",width:"200px"};
  message:any = {color:"red"}
  constructor() { }

  ngOnInit() {
  }

}
