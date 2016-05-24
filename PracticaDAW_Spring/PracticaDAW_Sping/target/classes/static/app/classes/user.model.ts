import {Recomendacion} from "./recomendacion.model";
export class user{
  id:number;
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
  recomendacionesMeGusta: Recomendacion[] = [];
  roles:string[];



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
      this.roles=['ROLE_USER'];
    }

    addSeguidor(){
      this.seguidores++;
    }
	
	hola(){
	console.log("hola");
	}
	
    addRecomendacion(r: Recomendacion){
      this.recomendaciones.push(r);
    }

    addMentor(u: user){
      this.mentoresSiguiendo.push(u);
    }

    delMentor(u: user){
      var aux = this.mentoresSiguiendo.indexOf(u);
      if (aux != -1){
        this.mentoresSiguiendo.splice(aux,1);
      }
    }

    addMeGustaR(r: Recomendacion){
      this.recomendacionesMeGusta.push(r);
    }

    delMeGustaR(r: Recomendacion){
      var aux = this.recomendacionesMeGusta.indexOf(r);
      if (aux != -1){
        this.recomendacionesMeGusta.splice(aux, 1);
      }
    }



  }
