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
  private juegos = [new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola','mola'])];

  private parametro:string;

  buscarJuego(){

  }
}
