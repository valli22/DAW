import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model.ts';
import {JuegoAdminComponent} from './juegoAdmin.component';
import {OfertaAdminComponent} from './ofertaAdmin.component';
import {JuegosService} from '../service/juegos.service.ts';
import {OfertasService} from '../service/ofertas.service.ts'

@Component({
  selector: 'administracion',
  templateUrl:'app/administracion/administracion.component.html',
  directives:[OfertaAdminComponent,JuegoAdminComponent,ROUTER_DIRECTIVES]
})

export class AdministracionComponent{

  private juegos :Juego[];
  private ofertas : Oferta[];

  constructor(private juegosService : JuegosService, private ofertasService : OfertasService){}

  ngOnInit(){
      this.juegos = this.juegosService.getJuegos();
      this.ofertas = this.ofertasService.getOfertas();
  }



}
