import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-vedio-carousel',
    standalone:true,
  imports: [CarouselModule, TranslateModule, NgOptimizedImage],
  templateUrl: './vedio-carousel.component.html',
  styleUrl: './vedio-carousel.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class VedioCarouselComponent {
      responsiveOptions: any[] | undefined;

 videos= [
    {
      id:1,
      title: 'home.videoLessons.videos.learnQuran',
      thumbnail: 'lessons/le-1.avif',
      url: 'https://www.youtube.com/embed/VIDEO_ID1'
    },
     {id:2,
       title: 'home.videoLessons.videos.memorization',
      thumbnail: 'lessons/le-4.avif',
      url: 'https://www.youtube.com/embed/VIDEO_ID4'
    },
    {
      id:3,
     title: 'home.videoLessons.videos.islamicHistory',
      thumbnail: 'lessons/le-2.avif',
      url: 'https://www.youtube.com/embed/VIDEO_ID2'
    },
    {
      id:4,
     title: 'home.videoLessons.videos.arabicBasics',
      thumbnail: 'lessons/le-3.avif',
      url: 'https://www.youtube.com/embed/VIDEO_ID3'
    },
   
  ];
}
