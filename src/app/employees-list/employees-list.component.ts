import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { BasicServiceService } from '../service/basic-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public elist: EmployeeComponent[] = []
  constructor(private basicService: BasicServiceService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  public getAllEmployees() {
    this.basicService.getAllEmployees().subscribe(
      response => {
        console.log(response)
        this.elist = response
      }
    )
  }

}
