import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  
})
export class SidebarComponent {


  
  isSubmenuOpen: boolean = false;
 

  @ViewChild(MatDrawer) drawer!: MatDrawer; // Utilisation de l'opérateur de post-fixe !

  constructor() {}

  toggleDrawer(): void {
    this.drawer?.toggle(); // Utilisation de l'opérateur optionnel pour gérer le cas où drawer n'est pas encore disponible
  }

  toggleSubmenu(): void {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }


  ngOnInit() {
    
  }
}
