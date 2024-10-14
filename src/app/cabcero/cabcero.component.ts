import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabcero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabcero.component.html',
})
export class CabceroComponent {
  @Input() presupuestoTotal!: number;
  @Input() ingresoTotal!: number;
  @Input() egresoTotal!: number;
  @Input() porcentajeTotal!: number;
}
