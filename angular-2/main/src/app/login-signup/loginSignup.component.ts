import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {user} from '../classes/user.model.ts';
import {CurrentUserService} from '../service/currentUser.service.ts';
import {UsersService} from '../service/users.service.ts';
@Component({
       selector: 'headerComponent',
       templateUrl: 'app/login-signup/loginSignup.component.html',
       directives:[ROUTER_DIRECTIVES],
       providers:[CurrentUserService,UsersService]
})
export class LoginSignupComponent  {
  usuarios: user[];
  usuario='';
  pass1='';
  pass2='';
  email='';
  fecha='';
  desc='';
  descMentor='';
  constructor(private currentUserService:CurrentUserService, private usersService:UsersService){
  }
  ngOnInit(){
    this.usuarios = this.usersService.getUsers();
    console.log(this.usuarios);
  }
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
    this.usersService.addUser(new user('../../img/logo.png',this.usuario,this.email,this.pass1,this.fecha,'sin definir','sin definir',this.desc,this.descMentor));
    console.log(this.usuarios);
  }
}
