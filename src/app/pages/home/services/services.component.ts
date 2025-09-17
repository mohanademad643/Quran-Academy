import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [PaginatorModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = [
    {
      title: 'home.services.service1.title',
      description: 'home.services.service1.description',
      icon: 'pi pi-book',
      image: 'Services/service-1.avif',
      id: 1,
    },
    {
      title: 'home.services.service2.title',
      description: 'home.services.service2.description',
      image: 'Services/service-1.avif',
      icon: 'pi pi-volume-up',
      id: 2,
    },
    {
      title: 'home.services.service3.title',
      description: 'home.services.service3.description',
      icon: 'pi pi-microphone',
      image: 'Services/service-1.avif',
      id: 3,
    },
    {
      title: 'home.services.service4.title',
      description: 'home.services.service5.description',
      icon: 'pi pi-globe',
      image: 'Services/service-1.avif',
      id: 4,
    },
    {
      title: 'home.services.service5.title',
      description: 'home.services.service5.description',
      icon: 'pi pi-id-card',
      image: 'Services/service-1.avif',
      id: 5,
    },
    {
      title: 'home.services.service6.title',
      description: 'home.services.service6.description',
      icon: 'pi pi-clock',
      image: 'Services/service-1.avif',
      id: 6,
    },
    {
      title: 'home.services.service7.title',
      description: 'home.services.service7.description',
      icon: 'pi pi-bookmark',
      image: 'Services/service-1.avif',
      id: 7,
    },
    {
      title: 'home.services.service8.title',
      description: 'home.services.service8.description',
      icon: 'pi pi-star',
      image: 'Services/service-1.avif',
      id: 8,
    },
    {
      title: 'home.services.service9.title',
      description: 'home.services.service9.description',
      icon: 'pi pi-heart',
      image: 'Services/service-1.avif',
      id: 9,
    },
  ];

  paginatedServices = this.services.slice(0, 3);

  onPageChange(event: any) {
    const start = event.first;
    const end = start + event.rows;
    this.paginatedServices = this.services.slice(start, end);
  }
}
