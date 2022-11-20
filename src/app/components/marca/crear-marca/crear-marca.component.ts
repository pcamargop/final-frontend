import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MarcaI} from 'src/app/Models/marca';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css']
})
export class CrearMarcaComponent {
  public form: FormGroup = this.formBuilder.group({
    descripcion: ['', [Validators.required]],
    
  });

  constructor(
    private formBuilder: FormBuilder,
    private marcaService: MarcaService,
    private messageService: MessageService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: MarcaI = this.form.value;
    console.log(formValue);
    this.marcaService.createmarca(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'marca Creado',
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
