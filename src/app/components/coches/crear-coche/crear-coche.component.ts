import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CocheI } from 'src/app/Models/coche';
import { CocheService } from 'src/app/service/coche.service';


@Component({
  selector: 'app-crear-coche',
  templateUrl: './crear-coche.component.html',
  styleUrls: ['./crear-coche.component.css']
})
export class CrearCocheComponent {
  public form: FormGroup = this.formBuilder.group({
    nombrecoche: ['', [Validators.required]],
    direccioncoche: ['', [Validators.required]],
    telefonocoche: ['', [Validators.required]],
    correocoche: ['', [Validators.required]],
    passwordcoche: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private cocheService: CocheService,
    private messageService: MessageService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: CocheI = this.form.value;
    console.log(formValue);
    this.cocheService.createcoche(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'coche Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('coches');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/coches');
  }
  get modelo() {
    return this.form.get('modelo');
  }

  get color() {
    return this.form.get('color');
  }
  get pvc() {
    return this.form.get('pvc');
  }
}
