import {user} from './user.model.ts';
import {Juego} from './juego.model.ts';
export class Recomendacion{
  mentor: user;
  titulo: string;
  meGusta: number;
  descripcion: string;
  juego: Juego;

  constructor (private mentorc: user, private tituloc : string,private meGustac: number, private descripcionc: string,private nombreJuegoc:Juego){
    this.mentor = mentorc;
    this.titulo = tituloc;
    this.meGusta = meGustac;
    this.descripcion = descripcionc;
    this.juego = nombreJuegoc;
  }
}
