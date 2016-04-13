import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Oferta} from './oferta.model';

@Component({
    selector: 'oferta1main',
    templateUrl: 'app/oferta1main.component.html'
})

export class Oferta1mainComponent{

   @Input()
   private oferta : Oferta;

   @Input()
   private posicion : string;


}
