import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiCustomer} from '../class/api-customer';
import {environment} from '../../../environments/environment';
import {Login} from '../structure/login';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.autenticacionApi;
    this.controller = 'auth/';

  }

  verificar(login: Login): boolean {
    this.action = `verificar`;
    // return this.http.post<any>(`${this.prefix}${this.controller}${this.action}`, {
    //   name: login.userName.toUpperCase(),
    //   pass: login.password,
    // }).pipe(map(response => response));
    return !! LOGEAR.find(e => e.usuario === login.usuario && e.password === login.password);
  }
}

// tabla de login
export const LOGEAR: Login[] = [
  {
    usuario: 'francisco',
    password: '12345'
  },
  {
  usuario: 'tony',
  password: '12345'
  }
];
