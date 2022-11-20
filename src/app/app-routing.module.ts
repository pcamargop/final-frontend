import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { ActualizarCocheComponent } from './components/coches/actualizar-coche/actualizar-coche.component';
import { CrearCocheComponent } from './components/coches/crear-coche/crear-coche.component';
import { MostrarCocheComponent } from './components/coches/mostrar-coche/mostrar-coche.component';
import { ActualizarMarcaComponent } from './components/marca/actualizar-marca/actualizar-marca.component';
import { CrearMarcaComponent } from './components/marca/crear-marca/crear-marca.component';
import { MostraMarcaComponent } from './components/marca/mostrar/mostra-marca.component';
import { ActualizarVentaComponent } from './components/ventas/actualizar-venta/actualizar-venta.component';
import { CrearVentaComponent } from './components/ventas/crear-venta/crear-venta.component';
import { MostrarVentaComponent } from './components/ventas/mostrar-venta/mostrar-venta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'clientes',
    component: MostrarClienteComponent,
  },
  {
    path: 'addclientes',
    component: CrearClienteComponent,
  },
  {
    path: 'clientes/edit/:id',
    component: ActualizarClienteComponent,
  },
   
  {
    path: 'coches',
    component: MostrarCocheComponent,
  },
  {
    path: 'addcoches',
    component: CrearCocheComponent,
  },
  {
    path: 'coches/edit/:id',
    component: ActualizarCocheComponent,
  },

  {
    path: 'marcas',
    component: MostraMarcaComponent,
  },
  {
    path: 'addmarcas',
    component: CrearMarcaComponent,
  },
  {
    path: 'marcas/edit/:id',
    component: ActualizarMarcaComponent,
  },

  {
    path: 'ventas',
    component: MostrarVentaComponent,
  },
  {
    path: 'addventas',
    component: CrearVentaComponent,
  },
  {
    path: 'ventas/edit/:id',
    component: ActualizarVentaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
