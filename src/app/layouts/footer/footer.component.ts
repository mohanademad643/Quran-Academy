import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

interface SocialLink {
  icon: string;
  url: string;
}
@Component({
  selector: 'app-footer',
    standalone:true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  items = [
    {
      label: 'HEADER.HOME',
      routerLink: 'home',
      fragment: 'home',
    },
    {
      label: 'HEADER.SERVICES',
      routerLink: 'home',
      fragment: 'services',
    },
    {
      label: 'HEADER.CONTACT_US',
      routerLink: 'home',
      fragment: 'contact-us',
    },
    {
      label: 'HEADER.ABOUT_US',
      routerLink: 'home',
      fragment: 'about-us',
    },
    {
      label: 'HEADER.WhayUs',
      routerLink: 'home',
      fragment: 'why-us',
    },
    {
      label: 'HEADER.PACKAGES',
      routerLink: 'home',
      fragment: 'packages',
    },
  ];

  socialLinks: SocialLink[] = [
    { icon: 'pi pi-facebook', url: 'https://facebook.com' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com' },
    { icon: 'pi pi-youtube', url: 'https://youtube.com' },
    { icon: 'pi pi-instagram', url: 'https://instagram.com' },
  ];
}
