import {Component} from 'angular2/core';
import{Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego1mainComponent} from './juego1main.component.ts';
import {Juego2mainComponent} from './juego2main.component.ts';
import {Juego3mainComponent} from './juego3main.component.ts';
import {Oferta1mainComponent} from './oferta1main.component.ts';
import {Oferta2mainComponent} from './oferta2main.component.ts';
import {Oferta3mainComponent} from './oferta3main.component.ts';


@Component({
  selector:'main',
  templateUrl: 'app/main/main.component.html',
  directives:[Juego1mainComponent,Juego2mainComponent,Juego3mainComponent,Oferta1mainComponent,Oferta2mainComponent,Oferta3mainComponent,ROUTER_DIRECTIVES]
})
export class MainComponent{

  private juegos = [new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola'])];
  private ofertas = [new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22)];
  private juegosLista = [new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola'])];
  private ofertasLista = [new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22),new Oferta('titulo1','esta es la descripcion de la oferta','../../img/logo.png',[new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola2','mola2'])],45,44,22)];

  /*dividirJuegos(){
    for (let i = 6; i <= 9; i++) {
        this.juegosLista.push(this.juegos[i]);
    }
  }

  dividirOfertas(){
    for (let i = 6; i <= 9; i++) {
        this.ofertasLista.push(this.ofertas[i]);
    }
  }*/

}
