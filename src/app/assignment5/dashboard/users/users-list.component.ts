import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from 'src/app/models/model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:IUser[];

  constructor(private usrSvcs:UserService) { }

  ngOnInit() {
    this.users=  this.usrSvcs.getUsersList();
  }

}
