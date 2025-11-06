import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hijodeportes',
  standalone: false,
  templateUrl: './hijodeportes.component.html',
  styleUrl: './hijodeportes.component.css',
})
export class HijodeportesComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre = new EventEmitter();


  //NECESITAMOS UN METODO PARA QUE CADA HIJO REALICE CLICK Y, A SU VEZ,
  //LLAMAMOS AL PARENT

  seleccionarFavoritoHijo(){
    //DENTRO DE emit() ENVIAREMOS LOS PARAMETROS QUE NECESITEMOS
    this.seleccionarFavoritoPadre.emit(this.sport)
  }
}
