import {Recomendacion} from './recomendacion.model';
import {user} from './user.model';
import {Tag} from './tag.model';
import {Plataforma} from './plataforma.model';

export class Juego{
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
  valoracion: number;
  tags: Tag[];
  plataforma: Plataforma[];
  recomendacion : Recomendacion[] = [];
  cantidad:number;
  id:number;
  constructor(private imagenc:string,private nombrec:string,private descripcionc:string,private precioc:number,private valoracionc : number, private tagsc:Tag[],private plataformac : Plataforma[]){
    this.imagen = imagenc;
    this.nombre = nombrec;
    this.descripcion = descripcionc;
    this.precio = precioc;
    this.valoracion = valoracionc;
    this.tags = tagsc;
    this.plataforma = plataformac;
    this.cantidad = 1;
  }

  addRecomendacion(recom: Recomendacion){
    this.recomendacion.push(recom);
  }
}
