import {MisMentores} from "./misMentoresEstruc.component";
import {Recomendaciones} from "./recomendacionesEstruc.component";
import {TodosMentores} from "./todosMentoresEstruc.component";
import {Component, Input} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {EditarRecomendacion} from './editarRecomendacion.component';

@Component({
  selector:'mentoresAjax',
  templateUrl: 'app/mentores/mentoresAjax.component.html',
  directives:[MisMentores, Recomendaciones, TodosMentores, EditarRecomendacion]
})

export class MentoresAjaxComponent{

  @Input()
  private pestana: string;
  private recom: Recomendacion;

  editarRecomendacion(recomendacion1: Recomendacion){
    this.recom = recomendacion1;
    this.pestana = "editar";
  }
}
