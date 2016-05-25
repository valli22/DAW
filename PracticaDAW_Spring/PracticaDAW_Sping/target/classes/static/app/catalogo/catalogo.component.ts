import {Component,Input} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {JuegoCatalogo} from './juegoCatalogo.component.ts';
import {RouteParams, Router} from 'angular2/router';
import {JuegosService} from '../service/juegos.service.ts';

@Component({
  selector:'catalogo',
  templateUrl: 'app/catalogo/catalogo.component.html',
  directives:[JuegoCatalogo,ROUTER_DIRECTIVES]
})
export class CatalogoComponent{
  private juegos : Juego[][]=[];
  private parametro:string="";
  private plataforma:string="";
  private categoria:string="Cualquiera";
  private juegosE:Juego[]=[];
  private dataUp = false;
  constructor(private juegosService:JuegosService,private _router:Router, routeParams:RouteParams){
    this.plataforma=routeParams.get('plataforma');
  }
  ngOnInit(){

    var plataf:boolean;
    var gamesInit:Juego[]=[];
    if(this.plataforma=='Cualquiera'){
    this.juegosService.getJuegos().subscribe(
    	juegos => {
    				this.juegosE = juegos;
    				console.log(this.juegosE);
    				this.dataUp = true;
    				var i = 0;
			      var j = 0;
			      var jueguillos = [];
			      for(var juego of this.juegosE){
			        jueguillos.push(juego);
			        j++;
			        if(j==4 || ((i*4)+j)==this.juegosE.length){
			          this.juegos.push(jueguillos);
			          console.log('jueguillos'+jueguillos);
			          jueguillos=[];
			          i++;
			          j=0;
			        }
			      }
    			},
    	error => console.log(error)
    );

    }else{
    	this.juegosService.getJuegos().subscribe(
    	juegosFun => {
    				var juegos = juegosFun;
    				this.dataUp = true;
    				for (var game of juegos){
				        plataf=false;
				        for (var consola of game.plataforma){
				          if(consola.nombre==this.plataforma.nombre){
				            plataf=true;
				            console.log('plataforma igual');
				          }
				        }
				        if(plataf==true){
				        	gamesInit.push(game);
				      	}
					  }
				      this.juegosE=gamesInit;
				      console.log('juegosE'+juegosE);
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
    			},
    	error => console.log(error));
      }
    }

  buscarJuego(){
    var plata:boolean;
    var catego:boolean;
    var games: Juego[]=[];
    
    this.juegosService.getJuegos().subscribe(
    	juegosFun => {
    				var juegos = juegosFun;
    				this.dataUp = true;
    				    
				    //for de todos los juegos
				      for (var game of juegos){
				        plata=false;
				        catego=false;
				        //comprobar plataforma
				          if(this.plataforma=="Cualquiera"){
				            plata=true;
				          }else{
				          for (var consola of game.plataforma){
				            if(consola.nombre==this.plataforma.nombre){
				              plata=true;
				            }
				          }
				         }//comprobar categoria
				        if(this.categoria.nombre=="Cualquiera"){
				          catego=true;
				        }else{
				          for(var categoria of game.tags){
				            if(categoria.nombre==this.categoria.nombre){
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
    			},
    	error => console.log(error)
    );

}
