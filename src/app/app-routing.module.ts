import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {INTERNAL_PATHS} from './core/conts/routes.conts';
import {SkeletonComponent} from './layaout/skeleton/skeleton.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL_PATHS.LOGEAR,
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.LOGEAR,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: INTERNAL_PATHS.PADRE,
    component: SkeletonComponent,
    children: [
      {
        path: INTERNAL_PATHS.CRUD,
        loadChildren: () => import('./modules/cruds/cruds.module').then(m => m.CrudsModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: INTERNAL_PATHS.LOGEAR
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
