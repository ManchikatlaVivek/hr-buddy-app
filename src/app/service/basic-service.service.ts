import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employees-list/employees-list.component';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  constructor(private httpClient: HttpClient) { }

  public getAllEmployees() {
    return this.httpClient.get<Array<Employee>>('http://localhost:8080/all');
  }

  public saveEmployee(emp:Employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/employee', emp);
  }

  public deleteEmployee(id:number) {
    return this.httpClient.delete<boolean>(`http://localhost:8080/employee/${id}`);
  }

  public updateEmployee(emp:Employee) {
    return this.httpClient.put<Employee>(`http://localhost:8080/employee/${emp.id}`, emp);
  }

}
