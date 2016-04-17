import {Component} from 'angular2/core';
import {Mentor} from '../classes/mentor.model';
import {Mentor1} from './mentor1mentores.component';

@Component({
  selector:'todosMentores',
  templateUrl: 'app/mentores/todosMentoresEstruc.component.html',
  directives:[Mentor1]
})
export class TodosMentores{

  private mentores: [Mentor];

}
