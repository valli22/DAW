import {Component,Input} from 'angular2/core';
import{user} from '../classes/user.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import{CurrentUserService} from '../service/currentUser.service.ts';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';
import {UsersService} from '../service/users.service.ts';

@Component({
  selector:'profile',
  templateUrl:'app/profile/profile.component.html',
  directives:[ROUTER_DIRECTIVES,Alert]
})
export class ProfileComponent{

  mostrarFallo = false;
  mostrarAcierto = false;
  private usuarios:user[];
  private nusuario: user;
  private nuevaPass="";
  private nuevaPassc="";
  private nombre="";
  private bnet="";
  private steam="";
  private fecha="";
  private descripcion="";
  private descripcionMentor="";
  private foto="";
  private pass="";
  private mail="";
  colapsado = true;
  dataUp=false;

  constructor(private currentUserService:CurrentUserService, private usersService: UsersService){
  }
  ngOnInit(){
    this.nusuario = this.currentUserService.getCurrentUser();
    this.nombre=this.nusuario.nombre;
    this.bnet=this.nusuario.bnet;
    this.steam=this.nusuario.steam;
    this.fecha=this.nusuario.fechaNacimiento;
    this.descripcion=this.nusuario.descripcion;
    this.descripcionMentor=this.nusuario.descripcionMentor;
    this.foto=this.nusuario.fotoPerfil;
    this.pass=this.nusuario.pass;
    this.mail=this.nusuario.correo;
    this.usersService.getUsers().subscribe(
      usuarios=> {
        this.usuarios=usuarios;
        this.dataUp =true;
      },
      error=> console.log('Error:'+error)
    );
  }


  passIguales(){
    return this.nuevaPass== this.nuevaPassc;
  }

  cambiarFoto(){
    this.colapsado=false;
  }

  noCogido(){
    var cogido= true;
    if(this.dataUp){
      for(var userio of this.usuarios){
        if(userio.nombre==this.nombre){
          cogido=false;
          break;
        }
      }
    }
    return cogido || this.nombre==this.nusuario.nombre;
  }
  cambiarDatos(newUser:user){
    if(this.nuevaPass==this.nuevaPassc){
      if(this.nuevaPass!=''){
        this.nusuario.pass=this.nuevaPass;
      }
      this.nusuario.fotoPerfil=this.foto;
      this.nusuario.nombre=this.nombre;
      this.nusuario.descripcion=this.descripcion;
      this.nusuario.descripcionMentor=this.descripcionMentor;
      this.nusuario.steam=this.steam;
      this.nusuario.bnet=this.bnet;
      this.nusuario.fechaNacimiento=this.fecha;
      this.nusuario.correo=this.mail;
      this.usersService.updateUser(this.nusuario).subscribe(
          user=> {
            this.nusuario=user;
            this.currentUserService.setUser(user);
          },
          error=> console.error('Error update: '+error)
      );
      this.mostrarAlert(true);
    }else{
      this.mostrarAlert(false);
    }
  }
  noMostrarAlert(){
      this.mostrarFallo=false;
      this.mostrarAcierto=false;
  }
  mostrarAlert(mostrar:boolean){
      if(mostrar){
          this.mostrarAcierto=true;
      }else{
          this.mostrarFallo=true;
      }
  }
  getStyles(){
    return {
      'display':this.colapsado? 'none':'block'
    }
  }
  setFoto(img:string){
    this.foto=img;
  }
  }
