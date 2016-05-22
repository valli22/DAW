import {CurrentUserService} from "../service/currentUser.service";
import {user} from "../classes/user.model";
import {JuegosService} from "../service/juegos.service";
import {Component, Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor2} from './mentor2mentores.component';
import {Juego} from '../classes/juego.model';

@Component({
  selector:'recomendaciones',
  templateUrl: 'app/mentores/recomendacionesEstruc.component.html',
  directives:[Mentor2],
})
export class Recomendaciones{

  private recomendaciones: Recomendacion[];
  private juegos : Juego[];
  private curUs: user;
  titulo = '';
  descripcion = '';
  tituloJuego: string;


  @Output()
  editRec = new EventEmitter<Recomendacion>();

  constructor(private juegosService: JuegosService, private curUserSer: CurrentUserService){}

  ngOnInit(){
    this.juegos = this.juegosService.getJuegos();
    this.curUs = this.curUserSer.getCurrentUser();
    this.recomendaciones = this.curUs.recomendaciones;
  }

  editarRecomendacion(recomend: Recomendacion){
    this.editRec.next(recomend);
  }

  addRecomendacion(){
    var ju = this.juegosService.getJuego(this.tituloJuego);
    var recom = new Recomendacion(this.curUs,this.titulo,0,this.descripcion,ju);
    this.titulo = '';
    this.descripcion = '';
    ju.addRecomendacion(recom);
    this.curUs.addRecomendacion(recom);
  };

}
