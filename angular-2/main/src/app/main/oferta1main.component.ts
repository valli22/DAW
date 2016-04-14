import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Oferta} from './oferta.model';

@Component({
    selector: 'oferta1main',
    templateUrl: 'app/main/oferta1main.component.html'
})

export class Oferta1mainComponent{

   @Input()
   private oferta : Oferta;

   @Input()
   private posicion : string;

   //llevar al carrito y añadir los juegos de la oferta al array de juegos que haya en el carrito
   comprarOferta(){

   }

}
