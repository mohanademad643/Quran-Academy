import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { isPlatformBrowser, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-testimonials',
  standalone:true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId); 
  testimonials = [
  {
    id:1,
    name: 'home.testimonials.ahmed.name',
    role: 'home.testimonials.ahmed.role',
    image: 'lessons/le-1.avif',
    feedback: 'home.testimonials.ahmed.feedback'
  },
  {
    id:2,
    name: 'home.testimonials.fatima.name',
    role: 'home.testimonials.fatima.role',
    image: 'lessons/le-2.avif',
    feedback: 'home.testimonials.fatima.feedback'
  },
  {
    id:3,
    name: 'home.testimonials.mohammed.name',
    role: 'home.testimonials.mohammed.role',
    image: 'lessons/le-3.avif',
    feedback: 'home.testimonials.mohammed.feedback'
  },
  {
    id:4,
    name: 'home.testimonials.layla.name',
    role: 'home.testimonials.layla.role',
    image: 'lessons/le-4.avif',
    feedback: 'home.testimonials.layla.feedback'
  }
];
  responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}


