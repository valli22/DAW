import {Component, Input} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';

@Component({
  selector:'editarRecomendacion',
  templateUrl: 'app/mentores/editarRecomendacion.component.html',
  directives:[]
})
export class EditarRecomendacion{

  @Input()
  recomendacion: Recomendacion;

}
