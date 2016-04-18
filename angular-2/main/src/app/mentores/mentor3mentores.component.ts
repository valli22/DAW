import {Component, Input} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';

@Component({
  selector:'mentor3mentores',
  templateUrl: 'app/mentores/mentor3mentores.component.html'
})
export class Mentor3{

  @Input()
  private recomendacion: Recomendacion;

}
