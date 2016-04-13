import {Component} from 'angular2/core';
import{Juego} from './juego.model';
import {Oferta} from './oferta.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector:'main',
  templateUrl: 'app/main.component.html',
  directives:[ROUTER_DIRECTIVES]
})
export class MainComponent{

  private juegos : Juego[] = [];
  private ofertas : Oferta[] = [];
  private juegosLista : Juego[] = [];
  private ofertasLista : Oferta[] = [];

  dividirJuegos(){
    for (let i = 6; i <= 9; i++) {
        this.juegosLista.push(this.juegos[i]);
    }
  }

  dividirOfertas(){
    for (let i = 6; i <= 9; i++) {
        this.ofertasLista.push(this.ofertas[i]);
    }
  }

}
