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
       if(j==2){
         this.ofertas.push(ofertillas);
         ofertillas=[];
         i++;
         j=0;
       }
     }
     /*for (let i = 0; i < (ofertasE.length/2); i++) {
         for (let j = 0; i < 2; i++){
           console.log(this.ofertas[i]);
           if(ofertasE.length>i*j){
             if(i==0){
               this.ofertas[i].push(ofertasE[j]);
             }else{
               this.ofertas[i].push(ofertasE[j*i]);
             }
           }else{
             break;
           }
         }
     }*/
  }

}
