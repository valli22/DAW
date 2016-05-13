import {CurrentUserService} from "../service/currentUser.service";
import {UsersService} from "../service/users.service";
import {Component} from 'angular2/core';
import {user} from '../classes/user.model';
import {Mentor1} from './mentor1mentores.component';

@Component({
  selector:'todosMentores',
  templateUrl: 'app/mentores/todosMentoresEstruc.component.html',
  directives:[Mentor1],
})
export class TodosMentores{

  private mentores: user[];

  constructor(private mentoresService: UsersService){}

  ngOnInit(){
    this.mentores = this.mentoresService.getUsers();
  }

}
