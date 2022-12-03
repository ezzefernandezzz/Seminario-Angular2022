import { Component, OnInit } from '@angular/core';
import { SerieFavoritosService } from '../serie-favoritos.service';
import { Serie } from './Serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss']
})
export class SerieListComponent implements OnInit {

  beers: Serie[]= [
    {
    portada: "https://iili.io/HqGfu4t.jpg",
    nombre: "Better Call Saul",
    genero: "Crimen",
    inicioEmision: '2015-08-02',
    calificacionActual: 4.5,
    cantCalificaciones: 2,
    cantidad_sumar: 0,
    enEmision: false,
    favorito: false,
    },
    {
      portada: "https://iili.io/HqGfR3X.jpg",
      nombre: "Dark",
      genero: "Ciencia Ficcion",
      inicioEmision: '2017-12-01',
      calificacionActual: 5,
      cantCalificaciones: 2,
      cantidad_sumar: 0,
      enEmision: false,
      favorito: false,
    },
    {
      portada: "https://iili.io/HqGf5an.jpg",
      nombre: "Los Simpsons",
      genero: "Comedia",
      inicioEmision: '1989-12-17',
      calificacionActual: 4,
      cantCalificaciones: 3,
      cantidad_sumar: 0,
      enEmision: true,
      favorito: false,
    },
  ];

  constructor(private favoritos: SerieFavoritosService) {
  }

  ngOnInit(): void {
  }

  addToFavoritos(serie: Serie): void{
    this.favoritos.addToFavoritos(serie);
    serie.favorito = true;
  }

  deleteToFavoritos(serie: Serie): void{
    this.favoritos.deleteToFavoritos(serie);
    serie.favorito = false;
  }
}
