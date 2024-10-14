import { Component } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-presupuesto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-presupuesto.component.html',
})
export class FormularioPresupuestoComponent {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string = '';
  valorInput: number = 0;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {}

  tipoOperacion(event: any) {
    console.log(event);
    this.tipo = event.target.value;
  }

  agregarValor() {
    if (this.tipo === 'ingresoOperacion') {
      this.ingresoService.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    } else {
      this.egresoService.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
    }
  }
}
