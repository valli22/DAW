import {RecomendacionesService} from "../service/recomendaciones.service";
import {JuegosService} from "../service/juegos.service";
import {Component, Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor2} from './mentor2mentores.component';
import {Juego} from '../classes/juego.model';

@Component({
  selector:'recomendaciones',
  templateUrl: 'app/mentores/recomendacionesEstruc.component.html',
  directives:[Mentor2],
  providers:[JuegosService,RecomendacionesService]
})
export class Recomendaciones{

  private recomendaciones: Recomendacion[];
  private juegos : Juego[];

  @Output()
  editRec = new EventEmitter<Recomendacion>();

  constructor(private juegosService: JuegosService, private recomService: RecomendacionesService){}

  ngOnInit(){
    this.juegos = this.juegosService.getJuegos();
    this.recomendaciones = this.recomService.getRecomendacionesOf();
  }

  editarRecomendacion(recomend: Recomendacion){
    this.editRec.next(recomend);
  }

  addRecomendacion(){};

}
