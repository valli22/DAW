import {Component} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor3} from './mentor3mentores.component';
import {RecomendacionesService} from '../service/recomendaciones.service';

@Component({
  selector:'misMentores',
  templateUrl: 'app/mentores/misMentoresEstruc.component.html',
  directives:[Mentor3],
  providers:[RecomendacionesService]
})
export class MisMentores{

  private recomendaciones: Recomendacion[];

  constructor(private recomendacionesService: RecomendacionesService){}

  ngOnInit(){
    this.recomendaciones = this.recomendacionesService.getRecomendacionesDeMentores();
  }

}
