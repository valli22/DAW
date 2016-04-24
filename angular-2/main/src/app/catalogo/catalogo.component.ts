import {Component,Input} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {JuegoCatalogo} from './juegoCatalogo.component.ts';
import {JuegosService} from '../service/juegos.service.ts'
import {RouteParams, Router} from 'angular2/router';

@Component({
  selector:'catalogo',
  templateUrl: 'app/catalogo/catalogo.component.html',
  directives:[JuegoCatalogo,ROUTER_DIRECTIVES]
})
export class CatalogoComponent{
  private juegos : Juego[][]=[];
  private parametro:string="";
  private plataforma:string="";
  private categoria:string="";
  private juegosE:Juego[];
  constructor(private juegosService:JuegosService,private _router:Router, routeParams:RouteParams){
    this.plataforma=routeParams.get('plataforma');
  }
  ngOnInit(){

    var plataf:boolean;
    var gamesInit:Juego[]=[];
    if(this.plataforma=='Cualquiera'){
      this.juegosE= this.juegosService.getJuegos();

    }else{
      for (var game of this.juegosService.getJuegos()){
        plataf=false;
        for (var consola of game.plataforma){
          if(consola==this.plataforma){
            plataf=true;
          }
        }
        if(plataf==true){
        gamesInit.push(game);
      }
      }
      this.juegosE=gamesInit;
      }
      var i = 0;
      var j = 0;
      var jueguillos = [];
      for(var juego of this.juegosE){
        jueguillos.push(juego);
        j++;
        if(j==4 || ((i*4)+j)==this.juegosE.length){
          this.juegos.push(jueguillos);
          jueguillos=[];
          i++;
          j=0;
        }
      }
    }

  buscarJuego(){
    var plata:boolean;
    var catego:boolean;
    var games: Juego[]=[];
    //for de todos los juegos
      for (var game of this.juegosService.getJuegos()){
        plata=false;
        catego=false;
        //comprobar plataforma
          if(this.plataforma=="Cualquiera"){
            plata=true;
          }else{
          for (var consola of game.plataforma){
            if(consola==this.plataforma){
              plata=true;
            }
          }
        }//comprobar categoria
        if(this.categoria=="Cualquiera"){
          catego=true;
        }else{
          for(var categoria of game.tags){
            if(categoria==this.categoria){
              catego=true;
            }
          }
        }
        //buscar por el paramtro
          if(this.parametro=="" && catego==true && plata==true){
            games.push(game);
          }else if(catego==true && plata==true){
              if(game.nombre.includes(this.parametro)){
                games.push(game);
              }
          }
      }//ordenar para que salga bien en la vista
      this.juegosE=games;
      console.log(games);
      console.log(this.juegosE);
      this.juegos=[];
      var i = 0;
      var j = 0;
      var jueguillos = [];
      for(var juego of this.juegosE){
        jueguillos.push(juego);
        j++;
        if(j==4 || ((i*4)+j)==this.juegosE.length){
          this.juegos.push(jueguillos);
          jueguillos=[];
          i++;
          j=0;
        }
      }
  }
}
