import {Component} from 'angular2/core';
import{Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego1mainComponent} from './juego1main.component.ts';
import {Juego2mainComponent} from './juego2main.component.ts';
import {Juego3mainComponent} from './juego3main.component.ts';
import {Juego4mainComponent} from './juego4main.component.ts';
import {Oferta1mainComponent} from './oferta1main.component.ts';
import {Oferta2mainComponent} from './oferta2main.component.ts';
import {Oferta3mainComponent} from './oferta3main.component.ts';
import {Oferta4mainComponent} from './oferta4main.component.ts';
import {JuegosService} from '../service/juegos.service.ts';
import {OfertasService} from '../service/ofertas.service.ts';


@Component({
  selector:'main',
  templateUrl: 'app/main/main.component.html',
  directives:[Juego4mainComponent,Juego1mainComponent,Juego2mainComponent,Juego3mainComponent,Oferta1mainComponent,Oferta2mainComponent,Oferta3mainComponent,Oferta4mainComponent,ROUTER_DIRECTIVES]
})
export class MainComponent{

  private juegos : Juego[];
  private ofertas : Oferta[];

  constructor(private juegosService : JuegosService, private ofertasService : OfertasService) {}

  ngOnInit(){
    this.juegos = this.juegosService.getJuegos();
    this.ofertas = this.ofertasService.getOfertas();
  }

}
