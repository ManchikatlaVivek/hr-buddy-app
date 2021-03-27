import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  constructor(private httpClient: HttpClient) { }

  public getAllEmployees() {
    return this.httpClient.get<Array<EmployeeComponent>>('http://localhost:8080/all');
  }

}
