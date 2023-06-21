import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRoute,Params,Router} from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: import("c:/Users/unthinkable-lap-0220/Desktop/LEARNING/Training/Angular/MyApp/src/app/models/model").IUser;
  isEditable:boolean =false;

  constructor(private usrSvcs:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.user = this.usrSvcs.getUsersById(param['id']);
    })
  }
  navigateToEdit(){
    this.router.navigate(['../edit'],{relativeTo:this.route})
  }
}
