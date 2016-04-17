import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model.ts';
import {JuegoAdminComponent} from './juegoAdmin.component';
import {OfertaAdminComponent} from './ofertaAdmin.component';

@Component({
  selector: 'administracion',
  templateUrl:'app/administracion/administracion.component.html',
  directives:[OfertaAdminComponent,JuegoAdminComponent,ROUTER_DIRECTIVES]
})

export class AdministracionComponent{

  private juegos = [new Juego('../../img/logo.png','titulojuego1','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego3','descripcion del juego',24,6.9,['hola','mola'])];

  private ofertas = [new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo2','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22)];

}
