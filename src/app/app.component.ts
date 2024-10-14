import { Component } from '@angular/core';
import { CabceroComponent } from './cabcero/cabcero.component';
import { FormularioPresupuestoComponent } from './formulario-presupuesto/formulario-presupuesto.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { IngresoService } from './ingreso/ingreso.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  providers: [IngresoService, EgresoService],
  imports: [
    CabceroComponent,
    FormularioPresupuestoComponent,
    IngresoComponent,
    EgresoComponent,
    FormsModule,
  ],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {
    (this.ingresos = ingresoService.ingresos),
      (this.egresos = egresoService.egresos);
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;

    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal() {
    let egresoTotal: number = 0;

    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  gePorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  gePresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
