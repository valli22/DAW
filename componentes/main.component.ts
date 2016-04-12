import {Component} from 'angular2/core';
import{Juego} from './juego.model';
@Component({
  selector:'main',
  templateUrl: 'app/main.component.ts'
})
export class MainComponent{

  private juegos : Juego[] = [];
  private ofertas : Ofertas[] = [];
  private juegosLista : Juego[] = [];
  private ofertasLista : Ofertas[] = [];

  dividirJuegos(){
    for (let i = 6; i < this.juegos.length; i++) {
        this.juegosLista.push(this.juegos[i]);
    }
  }

  dividirOfertas(){
    for (let i = 6; i < this.ofertas.length; i++) {
        this.ofertasLista.push(this.ofertas[i]);
    }
  }

}
