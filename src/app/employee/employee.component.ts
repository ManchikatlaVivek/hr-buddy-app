import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employees-list/employees-list.component';
import { BasicServiceService } from '../service/basic-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id: any;
  emp: Employee = new Employee(-1, '', '', '', 0);
  constructor(
    private basicService: BasicServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEmpId()
    if (this.id != -1) {
      this.getEmpDetails()
    }
    console.log("employee compont init called")
  }

  public save(e: Employee) {
    if (this.emp.id == -1) {
      console.log("save is called")
      this.basicService.saveEmployee(e).subscribe(
        respone => {
          this.emp.id = respone.id
          console.log(JSON.stringify(respone))
          this.router.navigate(['employeesList'])
        })
    } else {
      this.update(e)
    }
  }

  public update(e: Employee) {
    this.basicService.updateEmployee(e).subscribe(
      response => {
        console.log(JSON.stringify(response))
        this.router.navigate(['employeesList'])
      }
    )
  }

  public getEmpId() {
    this.route.paramMap.subscribe(
      resp => {
        console.log(resp)
        this.id = resp.get('empid')
      }
    )
  }

  public getEmpDetails() {
    this.basicService.getEmployeeWithId(this.id).subscribe(
      response => {
        this.emp = response
      }
    )
  }


}
