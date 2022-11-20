import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { CocheI } from 'src/app/Models/coche';
import { CocheService } from 'src/app/service/coche.service';

@Component({
  selector: 'app-mostrar-coche',
  templateUrl: './mostrar-coche.component.html',
  styleUrls: ['./mostrar-coche.component.css']
})
export class MostrarCocheComponent {
  public coches: CocheI[] = [];
  public msgs1: Message[] = [];
  constructor(
    private cocheService: CocheService,
    private router: Router,

    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.mostrarcoches();
  }

  mostrarcoches() {
    this.cocheService.getAllcoche().subscribe({
      next: (data) => {
        this.coches = data.coche;
        // console.log(this.coches)
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/coches');
    this.cocheService.deletecoche(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'coche Eliminado',
          life: 5000,
        });
        this.mostrarcoches();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/coches');
      }
    );
  }

  imprimir(id: number) {}
}
