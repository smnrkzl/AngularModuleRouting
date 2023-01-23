import { Component } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css'],
})
export class ListHomeComponent {
  numbers = [
    { value: 60, label: 'Müşteri' },
    { value: '6500 TL', label: 'Ciro' },
    { value: 55, label: 'Yorumlar' },
  ];

  images = [
    { image: 'assets/images/sifonyer.jpg', title: 'Sifonyer' },
    {
      image: '/assets/images/i.webp',
      title: 'Koltuk Takımı',
    },
  ];
}
