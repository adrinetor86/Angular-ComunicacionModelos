import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaproductosComponent} from './components/listaproductos/listaproductos.component';
import {HijococheComponent} from './components/hijocoche/hijocoche.component';
import {PadrecochesComponent} from './components/padrecoches/padrecoches.component';
import {PadredeportesComponent} from './components/padredeportes/padredeportes.component';
import {HijodeportesComponent} from './components/hijodeportes/hijodeportes.component';
import {ComicsComponent} from './components/comics/comics.component';
import {ComicComponent} from './components/comic/comic.component';

const routes: Routes = [
  {path:"productos",component:ListaproductosComponent},
  {path:"hijocoche",component:HijococheComponent},
  {path:"padrecoche",component:PadrecochesComponent},
  {path:"hijodeportes",component:HijodeportesComponent},
  {path:"padredeportes",component:PadredeportesComponent},
  {path:"comic",component:ComicComponent},
  {path:"comics",component:ComicsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
