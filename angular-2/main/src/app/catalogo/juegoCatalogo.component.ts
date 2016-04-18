import {Component,Input} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts'
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector:'juegoCatalogo',
  templateUrl: 'app/catalogo/juegoCatalogo.component.html',
  directives:[ROUTER_DIRECTIVES]
})
export class JuegoCatalogo{
  @Input()
  private juego : Juego;

  comprarJuego(){

  }
}
