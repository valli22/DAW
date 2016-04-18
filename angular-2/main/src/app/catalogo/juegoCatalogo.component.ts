import {Component,Input} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts'
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector:'juegoCatalogo',
  templateUrl: 'app/profile/catalogo.component.html',
  directives:[ROUTER_DIRECTIVES]
})
export class CatalogoComponent{
  @Input()
  private juego:Juego;

  private tags=this.juego.tags;
  comprarJuego(){

  }
}
