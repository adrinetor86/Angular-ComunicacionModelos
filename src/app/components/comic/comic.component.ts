import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Comic} from '../../models/Comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Input() index!:number ;
  @Output() seleccionarFavorito = new EventEmitter<Comic>();
  @Output() deleteComic:EventEmitter<any> = new EventEmitter<any>();

  seleccionarFavoritoHijo(){
    this.seleccionarFavorito.emit(this.comic);
  }

  borrarComic(){
    this.deleteComic.emit(this.index);
  }

  constructor() {
  }
}
