import {Component,Input} from '@angular/core';
import {Coche} from '../../models/Coche';



@Component({
  selector: 'app-hijocoche',
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})

export class HijococheComponent {

  @Input() car!: Coche;
  public mensaje: string;

  constructor() {

    this.car = new Coche("BMW", "X5", 280, 30, false);
    this.mensaje = "";

  }

  comprobarEstado(): boolean {
    if (!this.car.estado) {
      this.mensaje = "El coche esta apagado!!!";
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = "Arrancando!!!";
      return true;
    }
  }

  encenderCoche() {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche() {
    if (!this.comprobarEstado()) {
      alert("¿Donde vas? Esta apagado!!!");
    } else {
      this.car.velocidad += this.car.aceleracion;
    }
  }

}
