import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';
import {ofertaEstrucComponent} from './ofertaEstruc.component';

@Component({
  selector:'ofertas',
  templateUrl: 'app/ofertas/ofertas.component.html',
  directives:[ofertaEstrucComponent,ROUTER_DIRECTIVES]
})

export class OfertasComponent{

  private ofertas = [new Oferta('titulo1','esta es la descripcion de la ofert asfa asf asf as a','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta 2 sdgdguh wgwerg we gweg w egw g wegwg wegwg','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la ofertav efwgwweg weg weg weg weg weg weg  ','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de lag','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22)];

}
