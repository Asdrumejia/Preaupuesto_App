import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal!: number;

  constructor(private egresoService: EgresoService) {}

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
