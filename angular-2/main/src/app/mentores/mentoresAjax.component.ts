import {MisMentores} from "./misMentoresEstruc.component";
import {Recomendaciones} from "./recomendacionesEstruc.component";
import {TodosMentores} from "./todosMentoresEstruc.component";
import {Component, Input} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
  selector:'mentoresAjax',
  templateUrl: 'app/mentores/mentoresAjax.component.html',
  directives:[MisMentores, Recomendaciones, TodosMentores]
})

export class MentoresAjaxComponent{

  @Input()
  private pestana: string;

  constructor (private http: Http){}


}
