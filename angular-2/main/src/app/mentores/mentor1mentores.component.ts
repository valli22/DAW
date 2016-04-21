import {user} from "../classes/user.model";
import {Component, Input} from 'angular2/core';

@Component({
  selector:'mentor1mentores',
  templateUrl: 'app/mentores/mentor1mentores.component.html'
})
export class Mentor1{

  @Input()
  private mentor: user;

  seguirMentor(){

  }

}
