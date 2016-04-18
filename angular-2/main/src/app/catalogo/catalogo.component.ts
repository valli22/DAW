import {Component,Input} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {JuegoCatalogo} from './juegoCatalogo.component.ts';
@Component({
  selector:'catalogo',
  templateUrl: 'app/catalogo/catalogo.component.html',
  directives:[JuegoCatalogo,ROUTER_DIRECTIVES]
})
export class CatalogoComponent{
  private juegos : Juego[];
  private parametro:string;

  buscarJuego(){

  }
}
