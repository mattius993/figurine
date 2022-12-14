import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  
  @Input()
  title: string = "";

  @Input()
  message: string = ""; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
