import {Component, Input} from 'angular2/core';
import {user} from '../classes/user.model';

@Component({
  selector:'mentoresSiguiendo',
  templateUrl: 'app/mentores/mentoresSiguiendoEstruc.component.html'
})
export class MentoresSiguiendoEstruc{

  @Input()
  mentor: user;

}
