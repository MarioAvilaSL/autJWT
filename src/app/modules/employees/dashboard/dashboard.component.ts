import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeesService.getAllEmployees().subscribe({
      next: (data: any) => (this.employees = data),
      error: (err) => console.error('Error al cargar empleados:', err)
    });
  }
}
