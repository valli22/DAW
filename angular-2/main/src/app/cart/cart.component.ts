import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {CarritoService} from '../service/carrito.service.ts';
import {Juego} from '../classes/juego.model.ts';
import {CurrentUserService} from '../service/currentUser.service.ts';
import {user} from '../classes/user.model.ts';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
       selector: 'cartComponent',
       templateUrl: 'app/cart/cart.component.html',
       directives:[ROUTER_DIRECTIVES,Alert]
})
export class CartComponent  {
  private juegos : (Juego|Oferta)[];
  private codigos = ['VALLI22','EXCEN','ZIGIC','DROPELEGA'];
  private preciosTotales: number[] = [];
  private total = 0;
  checked=false;
  colapsado=true;
  currentUser:user;
  fallo=false;
  acierto =false;
  aplicable=true;
  constructor(private carritoService:CarritoService,private _router:Router,private currentUserService:CurrentUserService){
  
  }
  ngOnInit(){
    this.currentUser = this.currentUserService.getCurrentUser();
    this.juegos = this.carritoService.getPedido();
    for(var juego of this.juegos){
      var precioJuego = parseFloat((juego.cantidad*juego.precio).toFixed(2));
      this.total+= precioJuego;
      this.preciosTotales.push(precioJuego);
    }
    this.total= parseFloat(this.total.toFixed(2));
  }
  refreshTotal(){
    this.juegos =this.carritoService.getPedido();   
    this.total= 0;
    this.preciosTotales = []
    for(var juego of this.juegos){
        var precioJuego = parseFloat((juego.cantidad*juego.precio).toFixed(2));
        this.total+= precioJuego;
        this.preciosTotales.push(precioJuego);    
    }
    this.total= parseFloat(this.total.toFixed(2));

  }
  deshabilitado(){
    return this.checked && this.juegos.length>0;
  }
  precioTotal(precio:number,cantidad:number){
    return precio*cantidad;
  }

  aplicarCodigo(codigo:string){
    if(this.aplicable){
      for(var micodigo of this.codigos){
        if (micodigo==codigo) {
          this.total = parseFloat((this.total - this.total*0.05).toFixed(2));
          this.aplicable = !this.aplicable;
          break;
        }
      }
    }
  }

  getStyles(){
    return {
      'display':this.colapsado? 'none':'block'
    }
  }
  realizarPago(){
    if(this.userActive()){
      this.carritoService.vaciar();
      this.juegos= this.carritoService.getPedido();
      this.acierto=true;
      this.refreshTotal();
      this.checked=false;
    }else{
      this.fallo=true;
    }
  }
  userActive(){
    this.currentUser = this.currentUserService.getCurrentUser();
    return this.currentUser!=undefined;
  }
  noMostrarAlert(){
    this.fallo=false;
    this.acierto=false;
  }
}
