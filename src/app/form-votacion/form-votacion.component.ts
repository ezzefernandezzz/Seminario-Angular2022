import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-votacion',
  templateUrl: './form-votacion.component.html',
  styleUrls: ['./form-votacion.component.scss']
})
export class FormVotacionComponent implements OnInit {

  constructor() {
    this.cantidad_sumar = 1;
   }

  cantidad_sumar!: number;
  
  @Input()
  calificacionActual!: number;
  
  @Input()
  cantCalificaciones!: number;

  @Output()
  calificacionActualChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  cantCalificacionesChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  calcularCalificacion(): void{
    if(this.cantidad_sumar){
      if(this.cantCalificaciones != 0){
        let calificacionTotal = this.calificacionActual * this.cantCalificaciones;

        this.cantCalificaciones++;
        this.calificacionActual = Number (((calificacionTotal + this.cantidad_sumar) / this.cantCalificaciones).toFixed(2));
        console.log(((calificacionTotal + this.cantidad_sumar) / this.cantCalificaciones))
      }
      else{
        this.cantCalificaciones++;
        this.calificacionActual = this.cantidad_sumar;
      }
    }
    this.calificacionActualChange.emit(this.calificacionActual);
    this.cantCalificacionesChange.emit(this.cantCalificaciones);
  }
}
