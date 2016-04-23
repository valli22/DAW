import {Component, Input,Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';

@Component({
  selector:'editarRecomendacion',
  templateUrl: 'app/mentores/editarRecomendacion.component.html',
  directives:[]
})
export class EditarRecomendacion{

  @Input()
  recomendacion: Recomendacion;

  @Output()
  pestanaOut = new EventEmitter<string>();

  descripcion: string;

  ngOnInit(){
    this.descripcion = this.recomendacion.descripcion
  }

  editarRecomendacion(){
    this.recomendacion.descripcion = this.descripcion;
    this.pestanaOut.next("recomendaciones");
  }

}
