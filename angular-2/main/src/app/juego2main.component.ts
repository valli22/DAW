import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Juego} from './juego.model';

@Component({
  selector:'juego2main',
  templateUrl:'app/juego2main.component.html'
})

export class Juego2mainComponent{

  @Input()
  private juego : Juego;

  @Input()
  private posicion : string;

  //llevar al carrito y añadir al array de juegos que haya en el carrito
  comprarJuego(){

  }

}
