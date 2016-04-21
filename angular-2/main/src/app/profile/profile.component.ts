import {Component,Input} from 'angular2/core';
import{user} from '../classes/user.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector:'profile',
  templateUrl: 'app/profile/profile.component.html',
  directives:[ROUTER_DIRECTIVES]
})
export class ProfileComponent{
  @Input()
  private usuario:user;


  private nusuario =new user('../../img/logo.png','miguel','ahahahah@mdamdasds.com','1234','1995-02-05','miguelr95','roldan','pipipiip','popopp');
  private usuarion=this.nusuario;
  private viejaPass:string;
  private nuevaPass:string;
  private nuevaPassc:string;
  cambiarFoto(){

  }
  cambiarDatos(newUser:user){
    if(this.viejaPass===this.usuario.pass){
      if(this.nuevaPass===this.nuevaPassc){
        this.nusuario=this.usuarion;
      }else{
        //mensaje de error
      }
    }else{
      //mensaje deerror no coinciden contraseñas
    }

    }

  }
