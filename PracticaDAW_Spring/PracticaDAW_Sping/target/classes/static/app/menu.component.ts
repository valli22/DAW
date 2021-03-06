import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {CurrentUserService} from './service/currentUser.service.ts';
import {UsersService} from './service/users.service.ts';
import {user} from './classes/user.model.ts';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
    selector: 'menuComponent',
    templateUrl: 'app/menu.component.html',
    directives:[ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES,Alert]
})
export class MenuComponent {

    usuario = "";
    pass = "";
    currentUser:user;
    mostrarFallo = false;
    mostrarAcierto = false;
    status:{isopen:boolean} = {isopen: false};
    disabled:boolean =false;
    colapsado=true;
    constructor(private _router:Router, private currentUserService:CurrentUserService, private usersService:UsersService){}

    ngOnInit(){
        this.currentUser = this.currentUserService.getCurrentUser();
    }
    login(){
        this.currentUserService.logIn(this.usuario, this.pass).subscribe(
          user => {
                  this.currentUser = user;
                  this.currentUserService.getMentores().subscribe(
                    mentores =>{
                        console.log(mentores);
                    },
                    error => console.log('Algo va mal')
                    );
                  this._router.navigate(['Main']);
              },
          error => alert("Invalid user or password")
        );
    }
    noMostrarAlert(){
        this.mostrarFallo=false;
        this.mostrarAcierto=false;
    }
    mostrarAlert(mostrar:boolean){
        if(mostrar){
            this.mostrarAcierto=true;
        }else{
            this.mostrarFallo=true;
        }
    }
    currentActive(){
        this.currentUser = this.currentUserService.getCurrentUser();
        return this.currentUserService.getCurrentUser()!=undefined;
    }
    isAdmin(){
        return this.currentUserService.isAdmin;
    }
    cerrarSesion(){
        this.currentUserService.logOut().subscribe(
            response => {this.currentUser}, 
            error => console.log("Error when trying to log out: "+error)
        );
        this.currentUser=undefined;
        this.currentUserService.setUser(undefined);
        this.mostrarAcierto=false;
        this.usuario="";
        this.pass="";
        this._router.navigate(['Main']);
    }
    colapsar(){
        this.colapsado=!this.colapsado;
    }

    irMentores(){
        if(this.currentActive()){
            this._router.navigate(['Mentores']);
        }else{
            this._router.navigate(['LoginSignup']);
        }
    }
}
