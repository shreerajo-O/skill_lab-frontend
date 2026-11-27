import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
 providedIn: 'root'
})
export class EmployeeService {

 private apiUrl = 'http://localhost:8080/employee';
 constructor(private http: HttpClient) { }
 // POST: add employee (id is not sent)
 addEmployee(employee: Omit<Employee, 'id'>): Observable<Employee> {
  return this.http.post<Employee>(this.apiUrl, employee);
 }
 // GET: retrieve all employees
 getAllEmployees(): Observable<Employee[]> {
 return this.http.get<Employee[]>(this.apiUrl);
 }
}
