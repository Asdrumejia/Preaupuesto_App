import { Component, OnInit } from '@angular/core';

import { Ingreso } from './ingreso.model';
import { CommonModule } from '@angular/common';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingreso.component.html',
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresoService: IngresoService) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoService.eliminar(ingreso);
  }
}
