import {Component} from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent {

  public deportes:Array<string>;
  public mensaje:string;


  //NECESITAMOS UN METODO QUE RECIBIRA EVENT QUE VA A SER CUAQLUIER TIPADO (any)

  seleccionarFavoritoPadre(event:any){
    console.log("Comunicando al padre!!!"+event);
    this.mensaje="Deporte Favorito: "+event;
  }
  constructor() {
    this.mensaje="";
    this.deportes = ["Futbol","Baloncesto","Tenis","Natacion","Ciclismo"];

  }
}
