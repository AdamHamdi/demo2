import { Component, Input } from '@angular/core';

@Component({
  selector: 'pv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataTable!: any;
  @Input() pagination: boolean = false;
  @Input() showTotal: boolean = false;
  @Input() displayedColumns: { header: string; body: string }[] = [];
  @Input() showCheckbox: boolean = false;
}
