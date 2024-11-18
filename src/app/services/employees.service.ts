import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get('http://localhost:3000/api/empleados', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  getEmployeeById(id: number) {
    return this.http.get(`http://localhost:3000/api/empleados/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  createEmployee(employee: any) {
    return this.http.post('http://localhost:3000/api/empleados', employee, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  updateEmployee(id: number, employee: any) {
    return this.http.put(`http://localhost:3000/api/empleados/${id}`, employee, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  deleteEmployee(id: number) {
    return this.http.delete(`http://localhost:3000/api/empleados/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }
}
