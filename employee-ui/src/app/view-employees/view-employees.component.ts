import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-view-employees',

  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage = '';
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.loadEmployees();
  }
  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        this.errorMessage = 'Unable to load employees.';
        console.error(error);
      }
    });
  }
}