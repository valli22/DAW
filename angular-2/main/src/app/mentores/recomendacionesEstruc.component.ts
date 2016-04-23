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
  providers:[JuegosService,CurrentUserService]
})
export class Recomendaciones{

  private recomendaciones: Recomendacion[];
  private juegos : Juego[];
  private curUs: user;

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

  addRecomendacion(juego: string, recomendacion: string, titulo: string){
    var ju = this.findJuego(juego);
    var recom = new Recomendacion(this.curUs,titulo,0,"recomendacion",juego)
    ju.addRecomendacion(recom);
    this.curUs.addRecomendacion(recom);
    this.recomendaciones.push(recom);
  };

  findJuego(jueg: string){
    var i = 0;
    var juegosT = this.juegos;
    var ju = juegosT.pop();
    while ((i < this.juegos.length) && (ju.nombre != jueg)){
      i++;
      ju = juegosT.pop();
    }
    return ju;
  }

}
