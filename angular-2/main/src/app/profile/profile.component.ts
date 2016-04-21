import {Component,Input} from 'angular2/core';
import{user} from '../classes/user.model.ts';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CurrentUserService} from '../service/currentUser.service.ts';
@Component({
  selector:'profile',
  templateUrl: 'app/profile/profile.component.html',
  directives:[ROUTER_DIRECTIVES],
  providers:[CurrentUserService]
})
export class ProfileComponent{
  constructor(private currentUser:CurrentUserService){

  };

  private nusuario =this.currentUser.getCurrentUser();
  private usuarion=this.nusuario;
  private viejaPass:string;
  private nuevaPass:string;
  private nuevaPassc:string;
  cambiarFoto(){
    //hacer en algun momento de nuestra existencia

  }
  passCorrecto(){
      return this.usuarion.pass=this.viejaPass;
  }
  passIguales(){
    return this.nuevaPass==this.nuevaPassc;
  }
  cambiarDatos(){
    if(this.viejaPass===this.nusuario.pass){
      if(this.nuevaPass===this.nuevaPassc){
        this.nusuario=this.usuarion;
        }
      }
  }
}
