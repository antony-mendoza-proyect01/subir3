import { Injectable } from '@angular/core';
import { Login } from 'src/app/data/structure/login';
import {ApiService} from '../../../data/services/api.service';
import {LOCAL_STORAGE} from '../../../core/conts/localStorage.const';
import {ToastService} from '../../../shared/services/toast.service';
import {INTERNAL_PATHS} from '../../../core/conts/routes.conts';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router,
  ) { }

  async onVerificarLogin(login: Login) {
    try {
      const result = this.apiService.AuxiliarService.verificar(login);

      if(!result) {
        this.toastService.warning('Usuario o contraseña invalida');
        return;
      }

      localStorage.setItem(LOCAL_STORAGE.auth, JSON.stringify(result));

      this.router.navigate([INTERNAL_PATHS.PADRE])

    }catch (e) {
    }
  }
}
