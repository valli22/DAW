import {Recomendacion} from "./recomendacion.model";
export class user{
  fotoPerfil:string;
  nombre: string;
  correo:string;
  pass:string;
  fechaNacimiento:string;
  steam: string;
  bnet:string;
  descripcion:string;
  descripcionMentor:string;
  seguidores: number;
  recomendaciones: Recomendacion[] = [];
  mentoresSiguiendo: user[] = [];


  constructor(fotoPrefilc:string, nombrec: string, correoc:string, passc:string, fechaNacimientoc:string,
    steamc: string,
    bnetc:string,
    descripcionc:string,
    descripcionMentorc:string){
      this.fotoPerfil=fotoPrefilc;
      this.nombre=nombrec;
      this.correo=correoc;
      this.pass=passc;
      this.fechaNacimiento=fechaNacimientoc;
      this.steam=steamc;
      this.bnet=bnetc;
      this.descripcion=descripcionc;
      this.descripcionMentor=descripcionMentorc;
      this.seguidores = 0;
    }

    setSeguidores(s: number){
      this.seguidores = s;
    }

    addRecomendacion(r: Recomendacion){
      this.recomendaciones.push(r);
    }

    addMentor(u: user){
      this.mentoresSiguiendo.push(u);
    }

    delMentor(u: user){
      let aux = this.mentoresSiguiendo.indexOf(u);
      this.mentoresSiguiendo.splice(aux);
    }

  }
