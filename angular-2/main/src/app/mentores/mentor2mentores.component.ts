import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector:'mentor2mentores',
  templateUrl: 'app/mentores/mentor2mentores.component.html',
  directives: [ROUTER_DIRECTIVES]
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
