import {Mentor} from './mentor.model.ts';
export class recomendacion{
  mentor: Mentor;
  meGusta: number;
  descripcion: string;

  constructor (private mentorc: Mentor, private meGustac: number, private descripcionc: string){
    this.mentor = mentorc;
    this.meGusta = meGustac;
    this.descripcion = descripcionc;
  }
}
