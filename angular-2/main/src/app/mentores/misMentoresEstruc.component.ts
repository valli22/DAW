import {Component} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';

@Component({
  selector:'misMentores',
  templateUrl: 'app/mentores/misMentoresEstruc.component.html',
  directives:[]
})
export class MisMentores{

  private recomendaciones: [Recomendacion];

}
