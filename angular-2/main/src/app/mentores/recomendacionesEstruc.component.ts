import {Component, Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor2} from './mentor2mentores.component';
import {Juego} from '../classes/juego.model';
import {Mentor} from '../classes/mentor.model';

@Component({
  selector:'recomendaciones',
  templateUrl: 'app/mentores/recomendacionesEstruc.component.html',
  directives:[Mentor2]
})
export class Recomendaciones{

  private recomendaciones: Recomendacion[] = [new Recomendacion(new Mentor("Diego", "url", "imagen", "descripcion", 15, 15000), "Buen juego", 15000, "pedazo de juego", "the binding of isaac"), new Recomendacion(new Mentor("Diego2", "url2", "imagen2", "descripcion2", 2, 154000), "Buen 2", 154000, "pedazo de 2", "the binding of 2")];
  private juegos : Juego[];
  
  @Output()
  editRec = new EventEmitter<Recomendacion>();

  editarRecomendacion(recomend: Recomendacion){
    this.editRec.next(recomend);
  }

  addRecomendacion(){};

}
