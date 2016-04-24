import {user} from "../classes/user.model";
import {CurrentUserService} from "../service/currentUser.service";
import {Component, Input} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector:'mentor3mentores',
  templateUrl: 'app/mentores/mentor3mentores.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class Mentor3{

  @Input()
  private recomendacion: Recomendacion;

  disabled: boolean = false;
  private curUs: user;

  constructor(private curUsService: CurrentUserService){}

  ngOnInit(){
    this.curUs = this.curUsService.getCurrentUser();
    var i = 0;
    while (!this.disabled && i < this.curUs.recomendacionesMeGusta.length){
      this.disabled = this.curUs.recomendacionesMeGusta[i] == this.recomendacion;
      i++;
    }
  }

  dejarSeguir(){
    this.curUs.delMentor(this.recomendacion.mentor);
  }

  meGusta(){
    this.recomendacion.meGusta += 1;
    this.disabled = true;
    this.curUs.addMeGustaR(this.recomendacion);
  }

  noMeGusta(){
    this.recomendacion.meGusta -= 1;
    this.disabled = false;
    this.curUs.delMeGustaR(this.recomendacion);
  }

}
