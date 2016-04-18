import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Mentor} from '../classes/mentor.model';
import {MentoresAjaxComponent} from './mentoresAjax.component';
import {MentoresSiguiendoEstruc} from './mentoresSiguiendoEstruc.component';

@Component({
  selector:'mentores',
  templateUrl: 'app/mentores/mentores.component.html',
  directives:[MentoresAjaxComponent,MentoresSiguiendoEstruc,ROUTER_DIRECTIVES]
})

export class MentoresComponent{

  isOn1 = true;
  isDisabled1 = false;
  isOn2 = false;
  isDisabled2 = false;
  isOn3 = false;
  isDisabled3 = false;

  private mentoresSig: Mentor[] = [new Mentor("Diego", "url", "imagen", "descripcion", 15, 15000)];

  private aMostrar = "misMentores";

  mostrar(mostrarl : string){
    this.aMostrar = mostrarl;
  }

  toggle (newState){
    if (newState == '1'){
      this.isOn1 = true;
      this.isOn2 = false;
      this.isOn3 = false;
    } else if (newState == '2'){
      this.isOn1 = false;
      this.isOn2 = true;
      this.isOn3 = false;
    } else {
      this.isOn1 = false;
      this.isOn2 = false;
      this.isOn3 = true;
    }
  }

}
