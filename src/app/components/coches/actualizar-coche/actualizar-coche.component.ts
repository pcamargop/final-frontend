import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CocheI } from 'src/app/Models/coche';
import { CocheService } from 'src/app/service/coche.service';

@Component({
  selector: 'app-actualizar-coche',
  templateUrl: './actualizar-coche.component.html',
  styleUrls: ['./actualizar-coche.component.css']
})
export class ActualizarCocheComponent {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
    modelo: ['', [Validators.required]],
    color: ['', [Validators.required]],
    pvc: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private cocheService: CocheService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // let idcoche = this.route.snapshot.paramMap.get("id");
    this.getcoche(this.id);
  }

  getcoche(id: number) {
    this.cocheService.getOnecoche(id).subscribe({
      next: (data) => {
        this.form.setValue(data.coche);
        // console.log(data.coche)
      },
    });
  }

  onSubmit(): void {
    const formValue: CocheI = this.form.value;
    const id: number = this.form.value.id;
    this.cocheService.updatecoche(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'coche Actualizado',
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
