import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model.ts';
@Injectable()
export class CurrentUserService{
  private usuario:user;
  setUser(cUser:user){
    this.usuario=cUser;
  }
  getCurrentUser(){
    return this.usuario;
  }
}
