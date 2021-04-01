import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employeesList',component:EmployeesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
