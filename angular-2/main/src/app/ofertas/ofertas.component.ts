import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';
import {ofertaEstrucComponent} from './ofertaEstruc.component';
import {OfertasService} from '../service/ofertas.service.ts';

@Component({
  selector:'ofertas',
  templateUrl: 'app/ofertas/ofertas.component.html',
  directives:[ofertaEstrucComponent,ROUTER_DIRECTIVES],
  providers: [OfertasService]
})

export class OfertasComponent{

  private ofertas : Oferta[];

  constructor(private ofertasService : OfertasService){}

  ngOnInit(){
    this.ofertas = this.ofertasService.getOfertas();
  }

}
