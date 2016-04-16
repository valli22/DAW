import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Mentor} from '../classes/mentor.model';
import {mentoresAjaxComponent} from './mentoresAjax.component';

@Component({
  selector:'mentores',
  templateUrl: 'app/mentores/mentores.component.html',
  directives:[mentoresAjaxComponent,ROUTER_DIRECTIVES]
})

export class MentoresComponent{

  private mentoresSig: Mentor[];

  private aMostrar;

  mostrar(mostrarl : string){
    this.aMostrar = mostrarl;
  }

}
