import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
 { path: 'add-employee', component: AddEmployeeComponent },
 { path: 'view-employees', component: ViewEmployeesComponent },
 { path: 'not-found', component: NotFoundComponent },
 { path: '', redirectTo: 'add-employee', pathMatch: 'full' },
 // Keep wildcard route at the bottom
 { path: '**', redirectTo: 'not-found' }
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }