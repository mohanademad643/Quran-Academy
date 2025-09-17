import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NgClass } from '@angular/common';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { NavMenubarEndComponent } from '../nav-menubar-end/nav-menubar-end.component';
import { ILang, LanguageService } from '../../../core/language/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavMenubarEndComponent, RouterLink, NgClass, NavSidebarComponent, RouterLinkActive, DropdownModule, FormsModule, ButtonModule, TranslateModule, BadgeModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush

})
export class NavbarComponent {

  sidebarVisible = signal<boolean>(false);



  languageService = inject(LanguageService);

  onSelectLanguage(event: { value: ILang }) {
    this.languageService.changeLanguage(event.value)
  }


}
