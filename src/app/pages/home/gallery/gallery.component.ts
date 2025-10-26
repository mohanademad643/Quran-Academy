import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, GalleriaModule , CarouselModule, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { src: 'gallery/g-1.png', title: 'Sujoood Academy 1',id:1 },
    { src: 'gallery/g-2.png', title: 'Sujoood Academy 2',id:2  },
    { src: 'gallery/g-3.png', title: 'Sujoood Academy 3',id:3 },
    { src: 'gallery/g-4.png', title: 'Sujoood Academy 4' ,id:4},
    { src: 'gallery/g-5.png', title: 'Sujoood Academy 5' ,id:5},
    { src: 'gallery/g-6.png', title: 'Sujoood Academy 6' ,id:6},
    { src: 'gallery/g-7.png', title: 'Sujoood Academy 7',id:7 },
    { src: 'gallery/g-8.png', title: 'Sujoood Academy 8' ,id:8},
    { src: 'gallery/g-9.png', title: 'Sujoood Academy 9' ,id:9},
  ];
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId); 
  displayBasic = false;
  activeIndex = 0;
  responsiveOptions = [
    { breakpoint: '1200px', numVisible: 2, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 }
  ];
  openGallery(index: number) {
    this.activeIndex = index - 1;
    this.displayBasic = true;
  }
}
