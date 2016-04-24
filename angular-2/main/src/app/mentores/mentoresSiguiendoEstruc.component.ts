import {Component, Input} from 'angular2/core';
import {user} from '../classes/user.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector:'mentoresSiguiendo',
  templateUrl: 'app/mentores/mentoresSiguiendoEstruc.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MentoresSiguiendoEstruc{

  @Input()
  mentor: user;

}
