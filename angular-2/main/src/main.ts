import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';
import {CarritoService} from './app/service/carrito.service.ts';
import {CurrentUserService} from './app/service/currentUser.service.ts';
import {JuegosService} from './app/service/juegos.service.ts';
import {OfertasService} from './app/service/ofertas.service.ts';
import {UsersService} from './app/service/users.service.ts';


bootstrap(AppComponent, [
  ROUTER_PROVIDERS, CarritoService,
  provide(APP_BASE_HREF, {useValue : '/' })
]);
