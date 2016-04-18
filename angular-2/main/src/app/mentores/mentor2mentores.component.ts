import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';

@Component({
  selector:'mentor2mentores',
  templateUrl: 'app/mentores/mentor2mentores.component.html'
})
export class Mentor2{

  @Input()
  private recomendacion: Recomendacion;

  @Output()
  private editRec2 = new EventEmitter<Recomendacion>();

  editarRecomendacion(){
    this.editRec2.next(this.recomendacion);
  }

}
