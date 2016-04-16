export class Juego{
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
  valoracion: number;
  tags: [string];

  constructor(private imagenc:string,private nombrec:string,private descripcionc:string,private precioc:number,private valoracionc : number, private tagsc:[string]){
    this.imagen = imagenc;
    this.nombre = nombrec;
    this.descripcion = descripcionc;
    this.precio = precioc;
    this.valoracion = valoracionc;
    this.tags = tagsc;
  }

}
