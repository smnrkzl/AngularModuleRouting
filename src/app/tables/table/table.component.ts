import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  data = [
    { name: 'Can', age: '25', job: 'Endüstri Mühendisi', employed: 'Hayır' },
    { name: 'Mehmet', age: '36', job: 'Yazılım Mühendisi', employed: 'Evet' },
    { name: 'Merve', age: '26', job: 'İnşaat Mühendisi', employed: 'Evet' },
  ];
  headers = [
    { key: 'employed', label: 'Aldığı ücretten memnun mu?' },
    { key: 'name', label: 'Ad Soyad' },
    { key: 'age', label: 'Yaş' },
    { key: 'job', label: 'Meslek' },
  ];
}
