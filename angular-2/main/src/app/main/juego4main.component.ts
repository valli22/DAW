import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';
import {NgClass} from 'angular2/common';
import {CarritoService} from '../service/carrito.service.ts'

@Component({
  selector:'juego4main',
  templateUrl:'app/main/juego4main.component.html',
  providers : [CarritoService]
})

export class Juego4mainComponent{

  @Input()
  private juego : Juego;

  @Input()
  private posicion : number;

  constructor(private carritoService : CarritoService){}

  //llevar al carrito y añadir al array de juegos que haya en el carrito
  comprarJuego(){
      this.carritoService.addJuegoPedido(this.juego);
  }

}
