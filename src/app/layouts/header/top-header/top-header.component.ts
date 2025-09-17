import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ILang, LanguageService } from '../../../core/language/language.service';

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

  onSelectLanguage(event : {value: ILang}) {
    this.languageService.changeLanguage(event.value)
  }
}
