import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { SerieFavoritosService } from '../serie-favoritos.service';
import { Serie } from '../serie-list/Serie';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  listaSeriesFavoritas$!: Observable<Serie[]>;

  constructor(private favoritos:SerieFavoritosService) {
    this.listaSeriesFavoritas$ = favoritos.lista.asObservable();
   }

  ngOnInit(): void {
  }
}
