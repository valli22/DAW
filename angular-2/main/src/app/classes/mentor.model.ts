export class Mentor{
  nombre: string;
  url: string;
  imagen: string;

  constructor(private nombrec:string, private urlc : string, private imagenc: string){
    this.nombre = nombrec;
    this.url = urlc;
    this.imagen = imagenc;
  }
}
