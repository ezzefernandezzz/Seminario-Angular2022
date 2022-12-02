import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Serie } from './serie-list/Serie';

@Injectable({
  providedIn: 'root'
})
export class SerieFavoritosService {

  private _lista: Serie[] = []; 
  lista: BehaviorSubject<Serie[]> = new BehaviorSubject(this._lista);

  constructor() { }

  addToFavoritos(serie: Serie) {
    let item = this._lista.find((v1) => v1.nombre == serie.nombre);
    if(!item){
      this._lista.push(serie);
    }
    else{
      item.cantidad_sumar += serie.cantidad_sumar;
    }
    //console.log(this._lista.length);
    this.lista.next(this._lista);
  }

  deleteToFavoritos(serie: Serie) {
    let item = this._lista.find((v1) => v1.nombre == serie.nombre);
    if(item){
      //console.log(this._lista.indexOf(item));
      let index = this._lista.indexOf(item);
      this._lista.splice(index, 1);
    } 
    this.lista.next(this._lista);
  }
}
