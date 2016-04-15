import {Component} from 'angular2/core';
import{user} from './user.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector:'profile',
  templateUrl: 'app/main/profile.component.html',
  directives:[ROUTER_DIRECTIVES]
})
export class ProfileComponent{
  
  private usuarioNuevo:user;

  private viejaContraseña:string;
  private nuevaContraseña:string;
  private nuevaContraseñaC:string;
  cambiarFoto(){

  }
  cambiarDatos(){
    if(this.viejaContraseña===this.usuario.contraseña){
      if(this.nuevaContraseña===this.nuevaContraseñaC){
        this.usuario=this.usuarioNuevo;
      }else{
        //mensaje de error
      }
    }else{
      //mensaje deerror no coinciden contraseñas
    }

    }

  }
