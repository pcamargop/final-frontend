import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClienteI } from 'src/app/Models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent {
  public clientes: ClienteI[] = [];
 constructor( private clienteService: ClienteService,
  private router: Router,
  private messageService: MessageService){

 }
  mostrarClientes() {
    this.clienteService.getAllCliente().subscribe({
      next: (data) => {
        this.clientes = data.cliente;
        // console.log(this.clientes)
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/clientes');
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'Cliente Eliminado',
          life: 5000,
        });
        this.mostrarClientes();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/clientes');
      }
    );
  }

  imprimir(id: number) {}
}
