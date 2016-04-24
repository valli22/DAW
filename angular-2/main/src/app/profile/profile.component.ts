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
  private usuariodev:user;
  private viejaPass="";
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


    this.usuarios = this.usersService.getUsers();
  }
  passCorrecto(){
    return this.viejaPass==this.pass;
  }
  passIguales(){
    return this.nuevaPass== this.nuevaPassc;
  }
  cambiarFoto(){

  }
  noCogido(){
    var cogido= true;

    for(var userio of this.usuarios){
      if(userio.nombre==this.nombre){
        cogido=false;
        break;
      }
    }
    console.log(cogido);
    return cogido || this.nombre==this.nusuario.nombre;
  }
  cambiarDatos(newUser:user){
    if(this.viejaPass==this.pass){
      if(this.nuevaPass==this.nuevaPassc){
        this.usuariodev.nombre=this.nombre;
        this.usuariodev.pass=this.pass;
        this.usuariodev.descripcion=this.descripcion;
        this.usuariodev.descripcionMentor=this.descripcionMentor;
        this.usuariodev.steam=this.steam;
        this.usuariodev.bnet=this.bnet;
        this.usuariodev.fechaNacimiento=this.fecha;
        this.usuariodev.correo=this.mail;
        this.currentUserService.setUser(this.usuariodev);
        this.mostrarAlert(true);
      }else{
        this.mostrarAlert(false);
      }
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
  }
