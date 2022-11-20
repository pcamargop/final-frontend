import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClienteI } from 'src/app/Models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  public form: FormGroup = this.formBuilder.group({
    nombreCliente: ['', [Validators.required]],
    direccionCliente: ['', [Validators.required]],
    telefonoCliente: ['', [Validators.required]],
    correoCliente: ['', [Validators.required]],
    passwordCliente: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: ClienteI = this.form.value;
    console.log(formValue);
    this.clienteService.createCliente(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Cliente Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('clientes');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/clientes');
  }

    get nombreCliente() {
      return this.form.get('nombreCliente');
    }
  
    get direccionCliente() {
      return this.form.get('direccionCliente');
    }
    get apellidosCliente() {
      return this.form.get('apellidosCliente');
    }
    get ciudadCliente() {
      return this.form.get('ciudadCliente');
    }
    get codCliente() {
      return this.form.get('codCliente');
    }
}
