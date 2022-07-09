import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrudsComponent} from './cruds.component';
import {INTERNAL_PATHS} from '../../core/conts/routes.conts';

const routesLogin: Routes = [
  {
    path: '',
    component: CrudsComponent,
    children: [
      {
        path: INTERNAL_PATHS.CRUD_PROYECTO,
        loadChildren: () => import('../negocios/proyecto.module').then(m => m.ProyectoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesLogin)],
  exports: [RouterModule]
})
export class CrudsRoutingModule { }
