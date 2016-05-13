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
  titulo: string;

  ngOnInit(){
    this.descripcion = this.recomendacion.descripcion;
    this.titulo = this.recomendacion.titulo;
  }

  editarRecomendacion(){
    this.recomendacion.descripcion = this.descripcion;
    this.recomendacion.titulo = this.titulo;
    this.pestanaOut.next("recomendaciones");
  }

}
