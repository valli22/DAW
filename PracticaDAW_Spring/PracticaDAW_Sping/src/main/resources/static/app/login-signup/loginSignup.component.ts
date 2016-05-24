import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {user} from '../classes/user.model.ts';
import {CurrentUserService} from '../service/currentUser.service.ts';
import {UsersService} from '../service/users.service.ts';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
       selector: 'headerComponent',
       templateUrl: 'app/login-signup/loginSignup.component.html',
       directives:[Alert,ROUTER_DIRECTIVES]
})
export class LoginSignupComponent  {
  usuarios: user[];
  currentUser:user;
  usuario='';
  pass1='';
  pass2='';
  email='';
  fecha='';
  desc='';
  descMentor='';
  mostrarFallo = false;
  datosUp = false;
  constructor(private _router:Router, private currentUserService:CurrentUserService, private usersService:UsersService){
  }
  ngOnInit(){
    this.usersService.getUsers().subscribe(
        usuarios => {
          this.usuarios = usuarios;
          this.datosUp= true;
        }
    );  
  }
  noCogido(){
    var cogido= true;
    if(this.datosUp){
      for(var user of this.usuarios){
        if(user.nombre==this.usuario){
          cogido=false;
          break;
        }
      }
    }
    return cogido;
  }

  passIguales(){
    return this.pass1==this.pass2;
  }

  login(usuario:string, pass:string){
    /*for(var user of this.usuarios){
      if(user.nombre==usuario){
        if(user.pass==pass){
          this.currentUser = user;
          this.currentUserService.setUser(user);
          break;
        }
      }
    }*/
    this.currentUserService.logIn(usuario,pass).subscribe(
      user=> {
        this.currentUser = user;
        this.mostrarAlert(this.currentUser != undefined);
        if(this.currentUser!=undefined){
          this._router.navigate(['Main']);
        }
      },
      error=> {
        console.error('Error login: '+error)
        this.currentUser= undefined;
      }
    );
    
  }
  noMostrarAlert(){
        this.mostrarFallo=false;
  }
  mostrarAlert(mostrar:boolean){
      if(!mostrar){
        this.mostrarFallo=true;
      }
  }

  posibleRegistro(){
      var posible=false;
      if(this.noCogido() && this.usuario!='' && this.pass2!='' && this.passIguales && this.pass1!='' &&this.email!='' && this.fecha!='' && this.desc!='' && this.descMentor!=''){
        posible=true;
      }
      return posible;
  }

  registrar(){
    var newUser = new user('../../img/logo.png',this.usuario,this.email,this.pass1,this.fecha,'sin definir','sin definir',this.desc,this.descMentor);
    this.usersService.addUser(newUser).subscribe(
      user => {
        this.currentUserService.logIn(this.usuario,this.pass1).subscribe(
           user=> {},
           error=>console.error('Error login after signup: '+error)
        );
        this._router.navigate(['Main']);
      }, 
      error => console.error('Error creating new user: '+error)
    );  
  }
}
