import {Component} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor2} from './mentor2mentores.component';
import {Juego} from '../classes/juego.model';

@Component({
  selector:'recomendaciones',
  templateUrl: 'app/mentores/recomendacionesEstruc.component.html',
  directives:[Mentor2]
})
export class Recomendaciones{

  private recomendaciones: [Recomendacion];
  private juegos: [Juego];

  addRecomendacion(){};

}
