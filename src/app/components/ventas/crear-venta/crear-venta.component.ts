import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VentaI } from 'src/app/Models/ventas';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
     
    totalPagar: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private ventaService: VentaService,
    private messageService: MessageService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: VentaI = this.form.value;
    console.log(formValue);
    this.ventaService.createventa(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'venta Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('ventas');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/ventas');
  }

  get totalPagar() {
    return this.form.get('totalPagar');
  }

  get fecha() {
    return this.form.get('fecha');
  }
}
