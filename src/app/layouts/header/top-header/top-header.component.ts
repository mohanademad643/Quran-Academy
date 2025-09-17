import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ILang, LanguageService } from '../../../core/language/language.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [ DropdownModule, FormsModule, ButtonModule, TranslateModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush

})
export class TopHeaderComponent {
  languageService = inject(LanguageService);
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId); 
  onSelectLanguage(event : {value: ILang}) {
    this.languageService.changeLanguage(event.value)
  }
}
