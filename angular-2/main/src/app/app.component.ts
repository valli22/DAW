import {Component,View} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component.ts';
import {MenuComponent} from './menu.component.ts';
import {MainComponent} from './main/main.component.ts';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';




@Component({
       selector: 'app',
       templateUrl: 'app/app.component.html',
			 directives: [CabeceraComponent,MenuComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/home', name:'Main',component:MainComponent,useAsDefault:true}
])

export class AppComponent {
	private usuario = "";

	usuarioActivo(myuser:string){
		this.usuario = myuser;
	}
}
