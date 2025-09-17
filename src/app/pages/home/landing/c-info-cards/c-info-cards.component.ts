import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-c-info-cards',
    standalone:true,
  imports: [TranslateModule],
  templateUrl: './c-info-cards.component.html',
  styleUrl: './c-info-cards.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CInfoCardsComponent {
childContent = [
    { 
      icon: 'pi pi-gift', 
      text: 'home.childContent.Cart_1.text',
      description: 'home.childContent.Cart_1.description'
    },
    { 
      icon: 'pi pi-book', 
          text: 'home.childContent.Cart_2.text',
      description: 'home.childContent.Cart_2.description'
    },
    { 
      icon: 'pi pi-user', 
         text: 'home.childContent.Cart_3.text',
      description: 'home.childContent.Cart_3.description'
    },
    { 
      icon: 'pi pi-clock', 
           text: 'home.childContent.Cart_4.text',
      description: 'home.childContent.Cart_4.description'
    }
  ];
}
