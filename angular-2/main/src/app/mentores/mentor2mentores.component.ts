import {Component, Input} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';

@Component({
  selector:'mentor2mentores',
  templateUrl: 'app/mentores/mentor2mentores.component.html',
  directives:[]
})
export class Mentor2{

  @Input()
  private recomendacion: Recomendacion;

}
