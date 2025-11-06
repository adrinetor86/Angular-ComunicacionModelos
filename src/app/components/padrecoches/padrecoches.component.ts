import {Component} from '@angular/core';

import {Coche} from '../../models/Coche';



@Component({
  selector: 'app-padrecoches',
  standalone: false,
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css',
})
export class PadrecochesComponent {

  public cochesArray: Array<Coche>;

  constructor() {
    this.cochesArray = [
      new Coche("Ford","Mustang",400,25,false),
      new Coche("Chevrolet","Camaro",450,30,false),
      new Coche("Dodge","Challenger",480,35,false),
      new Coche("Tesla","Model S",670,50,false),
      new Coche("BMW","M3",500,40,false)
    ];

  }

}
