import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';
import {JuegosService} from '../service/juegos.service.ts';
import {OfertasService} from '../service/ofertas.service.ts';

@Component ({
  selector: 'ofertaEdit',
  templateUrl: 'app/administracion/ofertaEdit.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class OfertaEditComponent{

  private oferta : Oferta;

  //este es el array de todos los juegos disponibles en la tienda
  private juegos : Juego[];

  private colapsado = true;

  private ofertaCopia = this.oferta;
  private anadir = false;

  constructor(private _router:Router, routeParams:RouteParams, private serviceJuegos: JuegosService, serviceOfertas : OfertasService){
      let nombre = routeParams.get('nombre');
      this.oferta = serviceOfertas.getOferta(nombre);
      this.ofertaCopia = this.oferta;
  }

  ngOnInit(){
    this.juegos = this.serviceJuegos.getJuegos();
  }

  setFoto(imgs:string){
    this.oferta.imagen=imgs;
  }

  getStyles(){
    return {
      'display':this.colapsado? 'none':'block'
    }
  }

  contieneJuego( juego: Juego){
    var ret;
    ret =  this.ofertaCopia.juegos.indexOf(juego);
    if(ret==-1){
      return true;
    }else{
      return false;
    }
  }

  anadirJuego( i : number){
    var juego = this.juegos[i];
    this.ofertaCopia.juegos.push(juego);
  }

  eliminarJuego( i : number){
    this.ofertaCopia.juegos.splice(i,1);
  }

  cambiarFoto(){
    this.colapsado=false;
  }

  guardar(){
    this.oferta = this.ofertaCopia;
    this._router.navigate(['Admin']);
  }

}
