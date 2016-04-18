import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {user} from '../profile/user.model.ts';
@Component({
       selector: 'headerComponent',
       templateUrl: 'app/login-signup/loginSignup.component.html',
       directives:[ROUTER_DIRECTIVES]
})
export class LoginSignupComponent  {
  usuarios=[new user('../../img/logo.png','dropelega','prueba@gmail.com','1234','19-05-1995','dropelega','dropelega','Descripcion prueba','Developer and gamer'),new user('../../img/logo.png','excen','prueba@gmail.com','1111 ','19-05-1995','dropelega','dropelega','Descripcion prueba','Developer and gamer')];
  usuario='';
  pass1='';
  pass2='';
  email='';
  fecha='';
  desc='';
  descMentor='';

  noCogido(){
    var cogido= true;
    for(var user of this.usuarios){
      if(user.nombre==this.usuario){
        cogido=false;
        break;
      }
    }
    return cogido;
  }

  passIguales(){
    return this.pass1==this.pass2;
  }

  login(usuario:string, pass:string){
    for(var user of this.usuarios){
      if(user.nombre==usuario){
        if(user.pass==pass){
          alert('Se ha logueado');
          return undefined;
        }
      }
    }
    alert('El usuario y/o la password introducidas son incorrectos');
  }

  posibleRegistro(){
      var posible=false;
      if(this.noCogido() && this.usuario!='' && this.pass2!='' && this.passIguales && this.pass1!='' &&this.email!='' && this.fecha!='' && this.desc!='' && this.descMentor!=''){
        posible=true;
      }
      return posible;
  }

  registrar(){
    this.usuarios.push(new user('../../img/logo.png',this.usuario,this.email,this.pass1,this.fecha,'sin definir','sin definir',this.desc,this.descMentor));
    console.log(this.usuarios);
  }
}
