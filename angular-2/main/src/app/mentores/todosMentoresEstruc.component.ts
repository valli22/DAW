import {Component} from 'angular2/core';
import {Mentor} from '../classes/mentor.model';
import {Mentor1} from './mentor1mentores.component';

@Component({
  selector:'todosMentores',
  templateUrl: 'app/mentores/todosMentoresEstruc.component.html',
  directives:[Mentor1]
})
export class TodosMentores{

  private mentores: Mentor[] = [new Mentor("Diego", "url", "imagen", "descripcion", 15, 15000),new Mentor("Diego2", "url", "imagen", "descripcion", 15, 15000),new Mentor("Diego3", "url", "imagen", "descripcion", 15, 15000),new Mentor("Diego4", "url", "imagen", "descripcion", 15, 15000)];

}
