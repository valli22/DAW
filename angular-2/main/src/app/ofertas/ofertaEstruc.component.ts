import {Component, Input} from 'angular2/core';
import {Oferta} from '../classes/oferta.model.ts';

@Component({
  selector:'ofertaEstruc',
  templateUrl: 'app/ofertas/ofertaEstruc.component.html',
})

export class ofertaEstrucComponent {

  @Input()
  private oferta : Oferta;

  //llevar al carrito y añadir los juegos de la oferta al array de juegos que haya en el carrito
  comprarOferta(){

  }

}
