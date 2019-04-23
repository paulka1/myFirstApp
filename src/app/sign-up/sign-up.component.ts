import { Component, OnInit } from '@angular/core';
import { Order } from '../class/Order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formApp: Order = new Order;

  constructor() { }

  ngOnInit() {
  }

}
