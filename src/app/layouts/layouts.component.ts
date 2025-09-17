import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { LanguageService } from '../core/language/language.service';

@Component({
  selector: 'app-layouts',
    standalone:true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LayoutsComponent {
languageService = inject(LanguageService)
}
