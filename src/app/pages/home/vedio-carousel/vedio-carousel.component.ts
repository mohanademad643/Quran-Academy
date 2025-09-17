import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-vedio-carousel',
  standalone: true,
  imports: [CarouselModule, TranslateModule, NgOptimizedImage],
  templateUrl: './vedio-carousel.component.html',
  styleUrl: './vedio-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VedioCarouselComponent {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId); 

  videos = [
    { id: 1, title: 'home.videoLessons.videos.learnQuran', thumbnail: 'lessons/le-1.avif', url: 'https://www.youtube.com/embed/VIDEO_ID1' },
    { id: 2, title: 'home.videoLessons.videos.memorization', thumbnail: 'lessons/le-4.avif', url: 'https://www.youtube.com/embed/VIDEO_ID4' },
    { id: 3, title: 'home.videoLessons.videos.islamicHistory', thumbnail: 'lessons/le-2.avif', url: 'https://www.youtube.com/embed/VIDEO_ID2' },
    { id: 4, title: 'home.videoLessons.videos.arabicBasics', thumbnail: 'lessons/le-3.avif', url: 'https://www.youtube.com/embed/VIDEO_ID3' },
  ];
}
