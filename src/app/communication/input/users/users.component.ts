import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];

  public firstName: string;

  public lastName: string;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.users.push(new User(this.firstName, this.lastName));
    this.firstName = '';
    this.lastName = '';
  }
}
