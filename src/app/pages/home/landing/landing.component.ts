import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LandingComponent    {
  videoReady = signal(false);

  @ViewChild('bgVideo', { static: false }) bgVideo!: ElementRef<HTMLVideoElement>;

    constructor() {
      afterNextRender(() => {
      this.playVideo();
    });
      
    }
  playVideo() {
    if (this.bgVideo && this.bgVideo.nativeElement) {
      const video = this.bgVideo.nativeElement;
      video.currentTime = 0; 
      video.muted = true;
      video.play().then(() => {
        this.videoReady.set(true);
      }).catch(err => {
        console.error('Video play failed:', err);
      });
    }
  }
}
