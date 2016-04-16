import {Juego} from './juego.model';

export class Oferta{
  nombre : string;
  descripcion : string;
  imagen : string;
  juegos : [Juego];
  descuento : number;
  precioInicial : number;
  precioOferta: number;

  constructor(private nombrec:string,private descripcionc:string,private imagenc:string,private juegosc:[Juego],private descuentoc: number, private precioInicialc:number,private precioOfertac:number){
      this.nombre = nombrec;
      this.descripcion = descripcionc;
      this.imagen = imagenc;
      this.juegos = juegosc;
      this.descuento = descuentoc;
      this.precioInicial = precioInicialc;
      this.precioOferta = precioOfertac;
  }

}
