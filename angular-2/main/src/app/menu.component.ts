import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'menuComponent',
    templateUrl: 'app/menu.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class MenuComponent {
    @Input()
    private isActive = false;
    usuario = "";
    pass = "";

    @Output()
    myuser = new EventEmitter<string>();


    fireUser (){
      this.myuser.next(this.usuario);
    }
}
