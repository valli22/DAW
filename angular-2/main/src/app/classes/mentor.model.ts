export class Mentor{
  nombre: string;
  url: string;
  imagen: string;
  descripcion: string;
  seguidores: number;
  meGusta: number;

  constructor(private nombrec:string, private urlc : string, private imagenc: string, private descripcionc: string, private seguidoresc: number, private meGustac: number){
    this.nombre = nombrec;
    this.url = urlc;
    this.imagen = imagenc;
    this.descripcion = descripcionc;
    this.seguidores = seguidoresc;
    this.meGusta = meGustac;
  }
}
