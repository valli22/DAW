export class Juego{
  precioTotal:number;
  constructor(private img:string, private nombre:string, private precio:string, private cantidad:string){
    this.precioTotal = parseInt(this.precio)*parseInt(this.cantidad);
  }
  refreshGame(){
    this.precioTotal = parseFloat(this.precio)*parseFloat(this.cantidad);
  }
}
