import {user} from "../classes/user.model";
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

  addRecomendacion(juego: string, recomendacion: string){
    this.recomService.addRecomendacion(new Recomendacion(new user('../../img/perfil.png','Daniel','daniel@gmail.com','1234','1995-9','dani','daniYeah','Gamer con ganas de jugar y aprender', 'Todos los juegos de star wars estan aqui'),"Nueva recomendacion",0,"recomendacion",juego))
    //var ju = this.findJuego(juego);
    //ju.addRecomendacion(new Recomendacion(this.CurrentUser,"Nueva recomendacion",0,"recomendacion",juego));
    //this.CurrentUser.addRecomendacion(new Recomendacion(this.CurrentUser,"Nueva recomendacion",0,"recomendacion",juego))
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
