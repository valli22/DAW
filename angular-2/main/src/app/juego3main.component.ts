import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Juego} from './juego.model';

@Component({
  selector:'juego3main',
  templateUrl:'app/juego3main.component.html',
  inputs: ["juego","posicion"]
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
