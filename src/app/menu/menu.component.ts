import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  recentEvents = [
    {
      name: 'SUNTO MOON FESTIVAL',
      location: 'Le Maryssa (ACI 2000)',
      date: '11 Mai 2024',
      time: '21h - 03h',
      image: 'path/to/image1.jpg'
    },
    {
      name: 'SUNTO MOON - Chill Halloween',
      location: 'Caprices Lobo (Rue UBA / Quartier du fleuve)',
      date: 'samedi 29/10',
      time: '21h - 03h',
      image: 'path/to/image2.jpg'
    },
    {
      name: 'SUNTO MOON FESTIVAL',
      location: 'Le Maryssa (ACI 2000)',
      date: '11 Mai 2024',
      time: '21h - 03h',
      image: 'path/to/image3.jpg'
    }
  ];
}
