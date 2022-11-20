import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MarcaI } from 'src/app/Models/marca';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-actualizar-marca',
  templateUrl: './actualizar-marca.component.html',
  styleUrls: ['./actualizar-marca.component.css']
})
export class ActualizarMarcaComponent {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
    descripcion: ['', [Validators.required]],
     
  });

  constructor(
    private formBuilder: FormBuilder,
    private marcaService: MarcaService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // let idmarca = this.route.snapshot.paramMap.get("id");
    this.getmarca(this.id);
  }

  getmarca(id: number) {
    this.marcaService.getOnemarca(id).subscribe({
      next: (data) => {
        this.form.setValue(data.marca);
        // console.log(data.marca)
      },
    });
  }

  onSubmit(): void {
    const formValue: MarcaI = this.form.value;
    const id: number = this.form.value.id;
    this.marcaService.updatemarca(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'marca Actualizado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('marcas');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/marcas');
  }

  get descripcion() {
    return this.form.get('descripcion');
  }
}
