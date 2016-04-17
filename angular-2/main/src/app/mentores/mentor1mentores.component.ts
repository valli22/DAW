import {Component, Input} from 'angular2/core';
import {Mentor} from '../classes/mentor.model';

@Component({
  selector:'mentor1mentores',
  templateUrl: 'app/mentores/mentor1mentores.component.html',
  directives:[]
})
export class Mentor1{

  @Input()
  private mentor: Mentor;

}
