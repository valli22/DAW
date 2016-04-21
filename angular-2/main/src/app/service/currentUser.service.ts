import {Injectable} from 'angular2/core';
import {user} from '../profile/user.model.ts';
@Injectable()
export class UsersService{
  private usuario:user;
  setUser(cUser:user){
    this.usuario=cUser;
  }
  getCurrentUser(){
    return this.usuario;
  }
}
