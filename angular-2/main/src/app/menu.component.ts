import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {CurrentUserService} from './service/currentUser.service.ts';
import {UsersService} from './service/users.service.ts';
import {user} from './classes/user.model.ts';
@Component({
    selector: 'menuComponent',
    templateUrl: 'app/menu.component.html',
    directives:[ROUTER_DIRECTIVES],
})
export class MenuComponent {
    @Input()
    private isActive = false;
    usuario = "";
    pass = "";
    currentUser:user;
    @Output()
    myuser = new EventEmitter<user>();

    constructor(private _router:Router, private currentUserService:CurrentUserService, private usersService:UsersService){}

    ngOnInit(){
        this.currentUser = this.currentUserService.getCurrentUser();
        console.log(this.currentUser);
    }
    login(){
        console.log(this.currentUser);
        for(var usuario of this.usersService.getUsers()){
            if (usuario.nombre==this.usuario && usuario.pass == this.pass){
                this.currentUserService.setUser(usuario);
                this.currentUser=usuario;
                this._router.navigate(['Main']);
            }
        }
    }
    fireUser (user:user){
      this.myuser.next(user);
    }
    currentActive(){
        console.log(this.currentUserService.getCurrentUser());
        return this.currentUser!=undefined;
    }
}
