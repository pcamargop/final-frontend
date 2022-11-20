import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './maquetación/header/header.component';
import { FooterComponent } from './maquetación/footer/footer.component';
import { ContentComponent } from './maquetación/content/content.component';
import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { BorrarClienteComponent } from './components/cliente/borrar-cliente/borrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { ActualizarCocheComponent } from './components/coches/actualizar-coche/actualizar-coche.component';
import { CrearCocheComponent } from './components/coches/crear-coche/crear-coche.component';
import { ActualizarMarcaComponent } from './components/marca/actualizar-marca/actualizar-marca.component';
import { CrearMarcaComponent } from './components/marca/crear-marca/crear-marca.component';
import { ActualizarVentaComponent } from './components/ventas/actualizar-venta/actualizar-venta.component';
import { CrearVentaComponent } from './components/ventas/crear-venta/crear-venta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MostrarCocheComponent } from './components/coches/mostrar-coche/mostrar-coche.component';
import { MostraMarcaComponent } from './components/marca/mostrar/mostra-marca.component';
import { MostrarVentaComponent } from './components/ventas/mostrar-venta/mostrar-venta.component';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ActualizarClienteComponent,
    BorrarClienteComponent,
    CrearClienteComponent,
    MostrarClienteComponent,
    ActualizarCocheComponent,
    CrearCocheComponent,
    ActualizarMarcaComponent,
    CrearMarcaComponent,
    ActualizarVentaComponent,
    CrearVentaComponent,
    MostrarCocheComponent,
    MostraMarcaComponent,
    MostrarVentaComponent,
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule, 
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
