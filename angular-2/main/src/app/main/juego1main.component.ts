import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Juego} from './juego.model';

@Component({
  selector:'juego1main',
  templateUrl:'app/main/juego1main.component.html'
})

export class Juego1mainComponent{

  @Input()
  private juego : Juego;

  @Input()
  private posicion : string;

  //llevar al carrito y añadir al array de juegos que haya en el carrito
  comprarJuego(){

  }
}
