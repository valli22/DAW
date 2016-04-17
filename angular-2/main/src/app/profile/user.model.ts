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
    }

}
