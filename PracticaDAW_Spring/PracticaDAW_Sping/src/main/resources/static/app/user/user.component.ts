import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {user} from '../classes/user.model.ts';
import {UsersService} from '../service/users.service.ts';

@Component({
  selector:'user',
  templateUrl:'app/user/user.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class UserComponent {

  private usuario : user;

  constructor(private _router:Router, routeParams:RouteParams, service: UsersService){
      let nombre = routeParams.get('nombre');
      this.usuario = service.getUser(nombre);
  }

}
