import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, DepartmentApi } from '../model/department';
import { Municipalities } from '../model/municipalities';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = `${environment.API_URL_SOCRATE}/xdk5-pm3f.json`;


  private department = new Map<string, Department>();

  private AuxDepartment: Department = {
    c_digo_dane_del_departamento: '',
    departamento: '',
    municipios: []
  };
  private municipios!: Municipalities;



  constructor(private http: HttpClient) {
    // this.municipios={}
  }


  getAll() {
    // return this.http.get<DepartmentApi[]>(this.apiUrl).pipe(
    //   map(response => {
    //     response.map(departmentApi => {
    //       let auxDepartmentApi = this.department.get(departmentApi.c_digo_dane_del_departamento);
    //       this.AuxDepartment.c_digo_dane_del_departamento != auxDepartmentApi?.c_digo_dane_del_departamento;
    //       this.AuxDepartment.departamento != auxDepartmentApi?.departamento;
    //       if (auxDepartmentApi) {
    //         this.municipios.c_digo_dane_del_municipio = departmentApi.c_digo_dane_del_municipio;
    //         this.municipios.municipio = departmentApi.municipio;
    //         auxDepartmentApi.municipios.push(this.municipios);
    //       } else {
    //         this.department.set(departmentApi.c_digo_dane_del_departamento, auxDepartmentApi);
    //       }
    //       return departmentApi;
    //     })
    //   })
    // );
  }
}
