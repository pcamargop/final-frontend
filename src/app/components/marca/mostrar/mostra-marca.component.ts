import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MarcaI } from 'src/app/Models/marca';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-mostra-marca',
  templateUrl: './mostra-marca.component.html',
  styleUrls: ['./mostra-marca.component.css']
})
export class MostraMarcaComponent {
  public marcas: MarcaI[] = [];

  constructor(
    private marcaService: MarcaService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.mostrarmarcas();
  }

  mostrarmarcas() {
    this.marcaService.getAllmarca().subscribe({
      next: (data) => {
        this.marcas = data.marca;
        console.log(this.marcas);
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/marcas');
    this.marcaService.deletemarca(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'marca Eliminado',
          life: 5000,
        });
        this.mostrarmarcas();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/marcas');
      }
    );
  }

  imprimir(id: number) {}
}
