import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public employeeid: Number,
    public name: String,
    public role: String,
    public team: String,
    public salary: Number
  ) { }

  ngOnInit(): void {
  }

}
