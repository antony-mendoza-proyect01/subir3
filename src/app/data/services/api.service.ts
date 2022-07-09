import { Injectable } from '@angular/core';
import {AuxiliarService} from './auth.service';
import {LocalizacionesService} from './localizaciones.service';
import {ProyectoService} from './proyecto.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public AuxiliarService: AuxiliarService,
    public localizacionesService: LocalizacionesService,
    public ProyectoService: ProyectoService,
  ) { }
}
