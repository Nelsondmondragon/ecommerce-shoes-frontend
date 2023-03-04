import { Municipalities } from "./municipalities";

export interface DepartmentApi {
  c_digo_dane_del_departamento: string,
  departamento: string;
  c_digo_dane_del_municipio: string;
  municipio: string;



}


export interface Department extends Omit<DepartmentApi, 'c_digo_dane_del_municipio' | 'municipio'> {
  municipios: Municipalities[];
}


// export class DepartmentModel implements Department{
//   municipios: Municipalities[];
//   c_digo_dane_del_departamento: string;
//   departamento: string;

//   constructor(data: Department){
//     this.municipios = data.municipios;
//     this.c_digo_dane_del_departamento = data.c_digo_dane_del_departamento;
//     this.departamento = data.departamento;
//   }

// }

