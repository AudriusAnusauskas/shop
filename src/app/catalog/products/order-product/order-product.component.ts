import { Component, Input, OnInit } from '@angular/core';
import {UserService} from './../../../users.service'

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  @Input() productName;
  @Input() productPrice;
users;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users=this.userService.users
  }

  order(user){
    console.log("<uzsakyta> produktas:" + this.productName + "vartotojas: " + user.value);
    this.userService.order(user.value, this.productName, this.productPrice);

  }

}
