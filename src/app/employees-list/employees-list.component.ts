import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicServiceService } from '../service/basic-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public elist: Employee[] = []
  constructor(private basicService: BasicServiceService,
    private router: Router) { }

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

  public delete(emp: Employee) {
    console.log("delete method "+ emp.id)
    this.basicService.deleteEmployee(emp.id).subscribe(
      response => {
        console.log(response);
        this.getAllEmployees();
      }
    )
  }

  public update(emp:Employee){
    this.router.navigate(['employee'])
  }

  public save() {
    console.log("add method clicked")
    this.router.navigate(['employee'])
  }
}

export class Employee {
  constructor(public id: number,
    public name: string,
    public role: string,
    public team: string,
    public salary: number) { }
}
