import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Recomendacion} from '../classes/recomendacion.model.ts';

@Component({
  selector:  'esquemaJuego',
  templateUrl: 'app/esquemaJuego/esquemaJuego.component.html',
   directives:[ROUTER_DIRECTIVES]
})

export class EsquemaJuegoComponent {

  @Input()
  private juego : Juego;

  comprarJuego(){

  }

  recomendacionesVacia(){
    return this.juego.recomendacion.length!=0;
  }

}
