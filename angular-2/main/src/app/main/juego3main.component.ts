import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';

@Component({
  selector:'juego3main',
  templateUrl:'app/main/juego3main.component.html',
})

export class Juego3mainComponent{

  @Input()
  private juego : Juego;

  @Input()
  private posicion : number;

  //llevar al carrito y añadir al array de juegos que haya en el carrito
  comprarJuego(){

  }

}
