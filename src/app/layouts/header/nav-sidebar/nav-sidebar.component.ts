import { Component, input, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    StyleClassModule,
    RouterLink,
    RouterLinkActive,
    RippleModule,
    TranslateModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss',
})
export class NavSidebarComponent {
  sidebarVisible = model<boolean | null>(false);
  items!: MenuItem[];
  ngOnInit() {
  this.items = [
  {
    label: 'HEADER.HOME',
    icon: 'pi pi-home', 
    routerLink: 'home',
    fragment:"home"
  },
  {
    label: 'HEADER.SERVICES',
    icon: 'pi pi-briefcase',
      routerLink: 'home',
    fragment:"services"
  },
  {
    label: 'HEADER.CONTACT_US',
    icon: 'pi pi-envelope', 
  routerLink: 'home',
    fragment:"contact-us"

  },
  {
    label: 'HEADER.ABOUT_US',
    icon: 'pi pi-info-circle', 
  routerLink: 'home',
  fragment:"about-us"
  },
  {
    label: 'HEADER.WhayUs',
    icon: 'pi pi-users',
  routerLink: 'home',
  fragment:"why-us"
  },
  {
    label: 'HEADER.PACKAGES',
    icon: 'pi pi-box', 
 routerLink: 'home',
   fragment:"packages"
  }
];


  }
}
