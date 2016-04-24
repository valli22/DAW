import {user} from "../classes/user.model";
import {CurrentUserService} from "../service/currentUser.service";
import {Component, Input} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';

@Component({
  selector:'mentor3mentores',
  templateUrl: 'app/mentores/mentor3mentores.component.html'
})
export class Mentor3{

  @Input()
  private recomendacion: Recomendacion;

  disabled: boolean = false;
  private curUs: user;

  constructor(private curUsService: CurrentUserService){}

  ngOnInit(){
    this.curUs = this.curUsService.getCurrentUser();
    for (var i = 0; i < this.curUs.recomendacionesMeGusta.length; i++){
      
    }
  }

  dejarSeguir(){
    this.curUs.delMentor(this.recomendacion.mentor);
  }

  meGusta(){
    this.recomendacion.meGusta += 1;
    this.disabled = true;
  }

  noMeGusta(){
    this.recomendacion.meGusta -= 1;
    this.disabled = false;
  }

}
