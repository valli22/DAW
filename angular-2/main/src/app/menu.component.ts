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

    constructor(private _router:Router, private currentUserService:CurrentUserService, private usersService:UsersService){}

    ngOnInit(){
        this.currentUser = this.currentUserService.getCurrentUser();
    }
    login(){
      
        for(var usuario of this.usersService.getUsers()){
            if (usuario.nombre==this.usuario && usuario.pass == this.pass){
                this.currentUserService.setUser(usuario);
                this.currentUser=usuario;
                break;
            }
        }
        this.mostrarAlert(this.currentUser != undefined);
        if(this.currentUser!=undefined){
            this._router.navigate(['Main']);
        }    

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
}
