import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type ILang = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translateService = inject(TranslateService);
  readonly availableLanguages: ILang[] = ['en', 'ar'];
  private platformId = inject(PLATFORM_ID);
  private activeLanguage =signal<ILang>('en');
  currentLanguage = this.activeLanguage.asReadonly();

  constructor() {
        if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('IslamicAcademy') as ILang | null;
      if (saved) {
        this.activeLanguage.set(saved);
      }
    }
    this.translateService.addLangs(this.availableLanguages);
    this.translateService.setDefaultLang(this.currentLanguage());
  }

  changeLanguage(lang: ILang) {
    this.activeLanguage.set(lang);
    this.translateService.use(this.currentLanguage());
    localStorage.setItem('IslamicAcademy', this.currentLanguage());
  }
}
