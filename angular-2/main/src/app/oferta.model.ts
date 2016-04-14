import {Juego} from './juego.model';

export interface Oferta{
  nombre : string;
  descripcion : string;
  imagen : URL;
  juegos : [Juego];
  descuento : number;
  precioInicial : number;
  precioOferta: number;
}
