import {Component, Input} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {RecomendacionesService} from '../service/recomendaciones.service';

@Component({
  selector:'mentor3mentores',
  templateUrl: 'app/mentores/mentor3mentores.component.html',
  providers: [RecomendacionesService]
})
export class Mentor3{

  @Input()
  private recomendacion: Recomendacion;

  disabled: boolean = false;

  constructor(private recomService: RecomendacionesService){}

  dejarSeguir(){
    //Currentuser.delMentor(recomendacion.mentor);
  }

  meGusta(){
    this.recomendacion.meGusta += 1;
    this.recomService.cambiarMeGusta(this.recomendacion, +1);
    this.disabled = true;
  }

  noMeGusta(){
    this.recomendacion.meGusta -= 1;
    this.recomService.cambiarMeGusta(this.recomendacion, -1);
    this.disabled = false;
  }

}
