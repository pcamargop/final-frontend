import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClienteI } from 'src/app/Models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getCliente(this.id);
  }

  getCliente(id: number) {
    this.clienteService.getOneCliente(id).subscribe({
      next: (data) => {
        this.form.setValue(data.cliente);
        // console.log(data.cliente)
      },
    });
  }

  onSubmit(): void {
    const formValue: ClienteI = this.form.value;
    const id: number = this.form.value.id;
    this.clienteService.updateCliente(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Cliente Actualizado',
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
