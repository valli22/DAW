import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Oferta} from '../classes/oferta.model';
import {CarritoService} from '../service/carrito.service.ts';

@Component({
    selector: 'oferta1main',
    templateUrl: 'app/main/oferta1main.component.html',
    providers : [CarritoService]
})

export class Oferta1mainComponent{

   @Input()
   private oferta : Oferta;

   @Input()
   private posicion : string;

   constructor(private carritoService : CarritoService){}

   //llevar al carrito y añadir los juegos de la oferta al array de juegos que haya en el carrito
   comprarOferta(){
      this.carritoService.addOfertaPedido(this.oferta);
   }

}
