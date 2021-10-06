import { Component, OnInit } from '@angular/core';
import { UserService } from './../../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
addUser(name, surname){
  this.userService.addUser(name.value, surname.value);
  
}
}
