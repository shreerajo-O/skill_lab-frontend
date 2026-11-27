import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newEmployee = {
    name: '',
    dept: '',
    age: null as number | null,
    salary: null as number | null
  };
  message = '';
  errorMessage = '';
  isSaving = false;
  constructor(private employeeService: EmployeeService) { }
  addEmployee(): void {
    this.message = '';
    this.errorMessage = '';
    if (this.newEmployee.age === null ||
      this.newEmployee.salary === null) {
      this.errorMessage = 'Please enter age and salary.';
      return;
    }
    const employeeToSend = {
      name: this.newEmployee.name,
      dept: this.newEmployee.dept,
      age: this.newEmployee.age,
      salary: this.newEmployee.salary
    };
    this.isSaving = true;
    this.employeeService.addEmployee(employeeToSend).subscribe({
      next: (savedEmployee) => {
        this.message = 'Employee added. Generated ID: ' + savedEmployee.id;
        this.isSaving = false;
        this.newEmployee = {
          name: '',
          dept: '',
          age: null,
          salary: null
        };
      },
      error: (error) => {
        this.errorMessage =
          error.error?.message || 'Unable to add employee.';
        this.isSaving = false;
        console.error(error);
      }
    });
  }
}