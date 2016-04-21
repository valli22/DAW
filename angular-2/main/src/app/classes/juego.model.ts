import {Mentor} from './mentor.model.ts';
import {Recomendacion} from './recomendacion.model';

export class Juego{
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
  valoracion: number;
  tags: string[];
  plataforma: string[];
  recomendacion : Recomendacion[] = [];
  cantidad:number;

  constructor(private imagenc:string,private nombrec:string,private descripcionc:string,private precioc:number,private valoracionc : number, private tagsc:string[],private plataformac : string[]){
    this.imagen = imagenc;
    this.nombre = nombrec;
    this.descripcion = descripcionc;
    this.precio = precioc;
    this.valoracion = valoracionc;
    this.tags = tagsc;
    this.plataforma = plataformac;
    this.cantidad = 1;
  }

  addRecomendacion(mentor : Mentor,titulo:string, meGusta : number, descripcion : string){


    var recomendacionc = new Recomendacion(mentor,titulo,meGusta,descripcion,this.nombre);
    this.recomendacion.push(recomendacionc);

  }
}
