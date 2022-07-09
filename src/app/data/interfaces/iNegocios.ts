import {ProyectoArticles} from '../entities/proyectoArticles';

export interface Iproyecto {
  status: string;
  totalResults: number;
  productos: ProyectoArticles[];
}



export interface IProyectoResponse {
  status: string;
  productos: ProyectoArticles;
}
