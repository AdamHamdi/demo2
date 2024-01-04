import { Component, OnInit } from '@angular/core';

import { STATICUSERS_2 } from 'src/fakeData_2';
import { STATICUSERS } from 'src/fakeData';
import { Inventaire } from './models/inventaire';

@Component({
  selector: 'pv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  visible: boolean = false;
  searchTerm: string = '';
  searchTerm2: string = '';
  displayedColumns: { header: string; body: string }[] = [
    { header: 'Inventaire', body: 'ref_inventaire' },
    { header: 'Num OI', body: 'num_oi' },
    { header: 'Zone', body: 'zone_magasin' },
    { header: 'Magasin', body: 'magasin' },
    { header: 'Adresse', body: 'adresse' },
    { header: 'Operateur', body: 'nom_util_oi' },
  ];
  displayedColumnsListe: { header: string; body: string }[] = [
    { header: 'Opérateur', body: 'nom_util' },
    { header: 'Libellé', body: 'libelle' },
  ];
  fakeData: Inventaire[] = STATICUSERS_2;
  inventoryData: Inventaire[] = [];
  inventoryData2: Inventaire[] = [];
  fakeData2: { nom_util: string; libelle: string }[] = STATICUSERS;

  constructor() {}

  ngOnInit(): void {
    this.inventoryData = JSON.parse(JSON.stringify(this.fakeData));
    this.inventoryData2 = JSON.parse(JSON.stringify(this.fakeData2));
  }

  filterElement() {
    this.fakeData = this.inventoryData.filter((inventory) => {
      return Object.values(inventory).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  showDialog() {
    this.visible = true;
  }
}
