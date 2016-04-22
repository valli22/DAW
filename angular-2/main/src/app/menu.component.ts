import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CurrentUserService} from './service/currentUser.service.ts';
import {UsersService} from './service/users.service.ts';
import {user} from './classes/user.model.ts';
@Component({
    selector: 'menuComponent',
    templateUrl: 'app/menu.component.html',
    directives:[ROUTER_DIRECTIVES],
    providers:[CurrentUserService]
})
export class MenuComponent {
    @Input()
    private isActive = false;
    usuario = "";
    pass = "";

    @Output()
    myuser = new EventEmitter<user>();

    constructor(private currentUserService:CurrentUserService, private usersService:UsersService){}

    ngOnInit(){

    }
    login(){
        for(var usuario of this.usersService.getUsers()){
            if (usuario.nombre==this.usuario && usuario.pass == this.pass){
                this.currentUserService.setUser(usuario);
            }
        }
    }
    fireUser (user:user){
      this.myuser.next(user);
    }
}
