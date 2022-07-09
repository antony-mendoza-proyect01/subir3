export class Login {
  usuario: string;
  password: string;


  constructor(usuario?: string, contraseña?: string) {
    this.usuario = usuario || '';
    this.password = contraseña || '';
  }
}
