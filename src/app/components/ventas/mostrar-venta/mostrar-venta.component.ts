import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { VentaI } from 'src/app/Models/ventas';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-mostrar-venta',
  templateUrl: './mostrar-venta.component.html',
  styleUrls: ['./mostrar-venta.component.css']
})
export class MostrarVentaComponent {
  public ventas: VentaI[] = [];
  public msgs1: Message[] = [];
  constructor(
    private ventaService: VentaService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.mostrarventas();
  }

  mostrarventas() {
    this.ventaService.getAllventa().subscribe({
      next: (data) => {
        this.ventas = data.venta;
        // console.log(this.ventas)
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/ventas');
    this.ventaService.deleteventa(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'venta Eliminado',
          life: 5000,
        });
        this.mostrarventas();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/ventas');
      }
    );
  }

  imprimir(id: number) {}
}
