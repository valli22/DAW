import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {OfertasService} from '../service/ofertas.service.ts'

@Component({
  selector: 'ofertaAdmin',
  templateUrl:'app/administracion/ofertaAdmin.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class OfertaAdminComponent{

  constructor(private ofertaService : OfertasService){}

  @Input()
  private oferta : Oferta;

  eliminarOferta(){
      var ofertasAux = this.ofertaService.getOfertas();
      var index = ofertasAux.indexOf(this.oferta);
      this.ofertaService.getOfertas().splice(index,1);
  }

}
