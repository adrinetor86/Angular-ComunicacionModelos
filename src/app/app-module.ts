import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { MenuproductosComponent } from './components/menuproductos/menuproductos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeportesComponent } from './components/hijodeportes/hijodeportes.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicComponent } from './components/comic/comic.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuproductosComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeportesComponent,
    ComicsComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
