import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CounterComponent } from "./counter/counter.component";
import { NgOptimizedImage } from "@angular/common";
@Component({
  selector: 'app-whay-us',
  standalone: true,
  imports: [TranslateModule, CounterComponent],
  templateUrl: './whay-us.component.html',
  styleUrls: ['./whay-us.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WhayUsComponent {
  features = [
    {
    icon: 'pi pi-book',
      title: 'home.WhayUs.feature1.title',
      description: 'home.WhayUs.feature1.description'
    },
    {
     icon: 'pi pi-users',
       title: 'home.WhayUs.feature2.title',
      description: 'home.WhayUs.feature2.description'
    },
    {
      icon: 'pi pi-comments',
       title: 'home.WhayUs.feature3.title',
      description: 'home.WhayUs.feature3.description'
    },
    {
      icon: 'pi pi-chart-line',
        title: 'home.WhayUs.feature4.title',
      description: 'home.WhayUs.feature4.description'
    },
    {
      icon: 'pi pi-clock',
       title: 'home.WhayUs.feature5.title',
      description: 'home.WhayUs.feature5.description'
    },
    {
      icon: 'pi pi-gift',
        title: 'home.WhayUs.feature6.title',
      description: 'home.WhayUs.feature6.description'
    },
    {
      icon: 'pi pi-users',
        title: 'home.WhayUs.feature7.title',
      description: 'home.WhayUs.feature7.description'
    },
    {
      icon: 'pi pi-check-circle',
       title: 'home.WhayUs.feature8.title',
      description: 'home.WhayUs.feature8.description'
    }
  ];


 
}
