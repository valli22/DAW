import {user} from './user.model.ts';
export class Recomendacion{
  mentor: user;
  titulo: string;
  meGusta: number;
  descripcion: string;
  nombreJuego: string;

  constructor (private mentorc: user, private tituloc : string,private meGustac: number, private descripcionc: string,private nombreJuegoc:string){
    this.mentor = mentorc;
    this.titulo = tituloc;
    this.meGusta = meGustac;
    this.descripcion = descripcionc;
    this.nombreJuego = nombreJuegoc;
  }
}
