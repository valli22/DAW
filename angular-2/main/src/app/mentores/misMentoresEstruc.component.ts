import {Component} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor3} from './mentor3mentores.component';
import {Mentor} from '../classes/mentor.model';

@Component({
  selector:'misMentores',
  templateUrl: 'app/mentores/misMentoresEstruc.component.html',
  directives:[Mentor3]
})
export class MisMentores{

  private recomendaciones: Recomendacion[] = [new Recomendacion(new Mentor("Diego", "url", "imagen", "descripcion", 15, 15000), "Buen juego", 15000, "pedazo de juego", "the binding of isaac"), new Recomendacion(new Mentor("Diego2", "url2", "imagen2", "descripcion2", 2, 154000), "Buen 2", 154000, "pedazo de 2", "the binding of 2")];

}
