import { EventEmitter, Injectable } from '@angular/core';
import { IUser } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private usersList:IUser[] = [{id:1,name:'Abhishek'},{id:2,name:'Saurabh'},{id:3,name:'Manish'}];
  userEvtEmitter :EventEmitter<IUser[]>= new EventEmitter<IUser[]>();

  getUsersById(id:number){
  return this.usersList.find((user:IUser)=>user.id==id);
  }
  addUser(user:IUser){
    this.usersList.push(user);
    this.userEvtEmitter.emit(this.usersList);
  }
  getUsersList(){
    return this.usersList;
  }
  updateUser(user:IUser){
   const userObj=  this.getUsersById(user.id)

  }
}
