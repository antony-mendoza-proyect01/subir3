import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto.component';
import {ProyectoRoutingModule} from './proyecto-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProyectoComponent,
    ListadoComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProyectoModule { }
