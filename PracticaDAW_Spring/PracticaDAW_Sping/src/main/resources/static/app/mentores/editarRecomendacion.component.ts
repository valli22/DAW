import {Component, Input,Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {UsersService} from "../service/users.service";

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

  constructor(private service : UsersService){}

  ngOnInit(){
    this.descripcion = this.recomendacion.descripcion;
    this.titulo = this.recomendacion.titulo;
  }

  editarRecomendacion(){
    this.recomendacion.descripcion = this.descripcion;
    this.recomendacion.titulo = this.titulo;
    this.service.actualizarRecomendacion(this.recomendacion.mentor.id, this.recomendacion).subscribe(
    	response => console.log("Acutalizacion de la recomendacion completa"),
    	error => console.error(error)
    );
    this.pestanaOut.next("recomendaciones");
  }

}
