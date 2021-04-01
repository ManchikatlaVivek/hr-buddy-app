import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employees-list/employees-list.component';
import { BasicServiceService } from '../service/basic-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp: Employee = new Employee(-1, '', '', '', 0);
  constructor(
    private basicService: BasicServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("employee compont init called")
  }

  public save(e: Employee) {
    console.log("save is called")
    this.basicService.saveEmployee(e).subscribe(
      respone => {
        this.emp.id = respone.id
        console.log(JSON.stringify(respone))
        this.router.navigate(['employeesList'])
      })
  }

  public update(e:Employee){
    this.basicService.updateEmployee(e).subscribe(
      response => {
        console.log(JSON.stringify(response))
      }
    )
  }


}
