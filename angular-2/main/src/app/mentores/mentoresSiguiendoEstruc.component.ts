import {Component, Input} from 'angular2/core';
import {Mentor} from '../classes/mentor.model';

@Component({
  selector:'mentoresSiguiendo',
  templateUrl: 'app/mentores/mentoresSiguiendoEstruc.component.html'
})
export class MentoresSiguiendoEstruc{

  @Input()
  mentor: Mentor;

}
