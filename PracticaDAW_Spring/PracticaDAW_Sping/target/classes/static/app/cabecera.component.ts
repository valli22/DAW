import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
       selector: 'headerComponent',
       templateUrl: 'app/cabecera.component.html',
       directives:[ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES]
})
export class CabeceraComponent  {
	status:{isopen:boolean} = {isopen: false};
    disabled:boolean =false;
}
