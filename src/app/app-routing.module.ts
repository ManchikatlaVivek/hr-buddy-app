import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'employees',component:EmployeesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
