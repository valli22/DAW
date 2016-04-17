import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';
import {NgClass} from 'angular2/common';

@Component({
  selector:'juego4main',
  templateUrl:'app/main/juego4main.component.html',
})

export class Juego4mainComponent{

  @Input()
  private juego : Juego;

  @Input()
  private posicion : number;

  //llevar al carrito y añadir al array de juegos que haya en el carrito
  comprarJuego(){

  }

}
