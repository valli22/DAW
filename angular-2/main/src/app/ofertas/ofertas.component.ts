import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';
import {ofertaEstrucComponent} from './ofertaEstruc.component';
import {OfertasService} from '../service/ofertas.service.ts';

@Component({
  selector:'ofertas',
  templateUrl: 'app/ofertas/ofertas.component.html',
  directives:[ofertaEstrucComponent,ROUTER_DIRECTIVES]
})

export class OfertasComponent{

  private ofertas : Oferta[][] = [];

  constructor(private ofertasService : OfertasService){}

  ngOnInit(){
     var ofertasE = this.ofertasService.getOfertas();
     var i = 0;
     var j = 0;
     var ofertillas = [];
     for(var oferta of ofertasE){
       ofertillas.push(oferta);
       j++;
       if(j==2 || ((i*2)+j)==ofertasE.length ){
         this.ofertas.push(ofertillas);
         ofertillas=[];
         i++;
         j=0;
       }
     }
  }

}
