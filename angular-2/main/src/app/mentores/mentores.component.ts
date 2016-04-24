import {CurrentUserService} from "../service/currentUser.service";
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {user} from '../classes/user.model';
import {MentoresAjaxComponent} from './mentoresAjax.component';
import {MentoresSiguiendoEstruc} from './mentoresSiguiendoEstruc.component';
import {MentoresService} from '../service/mentores.service';

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

  private mentoresSig: user[];
  private curUs: user;

  constructor(private curUsService: CurrentUserService){};

  ngOnInit(){
    this.curUs = this.curUsService.getCurrentUser();
    this.mentoresSig = this.curUs.mentoresSiguiendo;
  }

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
