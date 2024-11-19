import { Component, AfterViewInit, OnDestroy, ElementRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as jQuery from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';
import 'datatables.net-responsive-dt';
import type { Config } from 'datatables.net';

interface TableData {
	id: number;
	name: string;
	position: string;
	office: string;
	age: number;
	startDate: string;
}

@Component({
  selector: 'app-brics-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="display" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
        </tr>
        <!-- Add more rows as needed -->
      </tbody>
    </table>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px;
    }
    
    :host ::ng-deep .dataTables_wrapper {
      padding: 20px;
      background: white;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class BricsTableComponent implements AfterViewInit, OnDestroy, OnInit {
	@Input() data: TableData[] = [];
	
  private dataTable: any;

  constructor(private elementRef: ElementRef) {}

		ngOnInit(): void {
		}
  ngAfterViewInit(): void {
    const $table = (jQuery as any)(this.elementRef.nativeElement.querySelector('table'));
    this.dataTable = $table.DataTable({
      pageLength: 10,
      responsive: true,
      dom: 'Bfrtip',
      data: this.data,
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'age' },
        { data: 'startDate' }
      ],
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    } as Config);
  }

  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }
}