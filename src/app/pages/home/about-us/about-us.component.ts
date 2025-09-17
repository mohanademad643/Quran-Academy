import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-about-us',
    standalone:true,
  imports: [DialogModule, ButtonModule, TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent {
  display = signal< boolean> (false);


  aboutData = {
    label: 'home.aboutUs.label',
    title: 'home.aboutUs.title',

    paragraphs: [
      `home.aboutUs.paragraph1`,
      `home.aboutUs.paragraph2`,
      `home.aboutUs.paragraph3`,
      `home.aboutUs.paragraph4`,
      `home.aboutUs.paragraph5`,
      `home.aboutUs.paragraph6`,
    ],
    buttonText: 'home.aboutUs.buttonText',
    image: 'about-3.avif',
    smallImage: 'about-2.avif',
    videoUrl: 'https://www.youtube.com/embed/example',
  };

 
}
