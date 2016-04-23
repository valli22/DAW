import {UsersService} from "../service/users.service";
import {Component} from 'angular2/core';
import {user} from '../classes/user.model';
import {Mentor1} from './mentor1mentores.component';

@Component({
  selector:'todosMentores',
  templateUrl: 'app/mentores/todosMentoresEstruc.component.html',
  directives:[Mentor1],
  providers:[UsersService]
})
export class TodosMentores{

  private mentores: user[];

  constructor(private mentoresService: UsersService){}

  ngOnInit(){
    this.mentores = this.mentoresService.getUsers();
  }

}
