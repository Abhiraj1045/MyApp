import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class EditUserComponent implements OnInit {
  user: import("c:/Users/unthinkable-lap-0220/Desktop/LEARNING/Training/Angular/MyApp/src/app/models/model").IUser;
  isEditable:boolean =false;

  constructor(private usrSvcs:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.user = this.usrSvcs.getUsersById(param['id']);
    })
  }
  saveUser(name:string){
    this.user.name = name;
    // this.usrSvcs.updateUser(this.user);
  }
  redirectBack(){
    this.router.navigate(['../detail'],{relativeTo:this.route})
  }

}
