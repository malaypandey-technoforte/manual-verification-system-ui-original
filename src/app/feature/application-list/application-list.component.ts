import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROLE_FIELDS_MAP } from '../../shared/role-fields';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent implements OnInit {

  role: string = '';
  fields: string[] = [];
  data: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.role = history.state.role;
    this.data = history.state.data;

    this.fields = ROLE_FIELDS_MAP[this.role];
  }

  onRowClick(rowData: any) {
    this.router.navigate(['/application-detail'], { state: { data: rowData }});
  }
}