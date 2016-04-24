import {Component,View} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component.ts';
import {MenuComponent} from './menu.component.ts';
import {MainComponent} from './main/main.component.ts';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FooterComponent} from './footer.component.ts';
import {CartComponent} from './cart/cart.component.ts';
import {OfertasComponent} from './ofertas/ofertas.component';
import {EsquemaJuegoComponent} from './esquemaJuego/esquemaJuego.component.ts';
import {LoginSignupComponent} from './login-signup/loginSignup.component.ts';
import {CatalogoComponent} from './catalogo/catalogo.component.ts';
import {AdministracionComponent} from './administracion/administracion.component.ts';
import {ProfileComponent} from './profile/profile.component.ts';
import {MentoresComponent} from './mentores/mentores.component.ts';
import {CarritoService} from './service/carrito.service.ts';
import {CurrentUserService} from './service/currentUser.service.ts';
import {UsersService} from './service/users.service.ts';
import {JuegoNuevoComponent} from './administracion/juegoNuevo.component.ts';
import {OfertaNuevaComponent} from './administracion/ofertaNueva.component.ts';
import {JuegosService} from './service/juegos.service.ts';
import {OfertasService} from './service/ofertas.service.ts';
import {JuegoEditComponent} from './administracion/juegoEdit.component.ts';
import {OfertaEditComponent} from './administracion/ofertaEdit.component.ts';
import {UserComponent} from './user/user.component.ts';


@Component({
       selector: 'app',
       templateUrl: 'app/app.component.html',
			 directives: [UserComponent,MentoresComponent,ProfileComponent,AdministracionComponent,CatalogoComponent,EsquemaJuegoComponent,CabeceraComponent,MenuComponent,FooterComponent,ROUTER_DIRECTIVES],
       providers:[OfertaEditComponent,JuegoNuevoComponent,OfertaNuevaComponent,JuegoEditComponent,CarritoService,CurrentUserService,UsersService,JuegosService,OfertasService]
})
@RouteConfig([
    {path:'/home', name:'Main',component:MainComponent, useAsDefault:true},
    {path:'/cart',name:'Cart', component:CartComponent},
    {path:'/ofertas', name:'Ofertas', component:OfertasComponent},
    {path:'/juego/:nombre', name:'EsquemaJuego', component:EsquemaJuegoComponent},
    {path:'/login-signup', name:'LoginSignup', component:LoginSignupComponent},
    {path:'/catalogo/:plataforma', name:'Catalogo', component:CatalogoComponent},
    {path:'/admin', name:'Admin', component:AdministracionComponent},
    {path:'/perfil', name:'Perfil', component:ProfileComponent},
    {path:'/mentores', name:'Mentores', component:MentoresComponent},
    {path:'/admin/juegoNuevo', name:'JuegoNuevo', component:JuegoNuevoComponent},
    {path:'/admin/ofertaNueva', name:'OfertaNueva', component:OfertaNuevaComponent},
    {path:'/admin/editarJuego/:nombre', name:'EditarJuego', component:JuegoEditComponent},
    {path:'/admin/editarOferta/:nombre', name:'EditarOferta', component:OfertaEditComponent},
    {path:'/usuario/:nombre', name:'UsuarioEsp', component:UserComponent}

])

export class AppComponent {

}
