import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, inject, OnInit } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from "./about-us/about-us.component";
import { CInfoCardsComponent } from "./landing/c-info-cards/c-info-cards.component";
import { ServicesComponent } from "./services/services.component";
import { ActivatedRoute, Router } from '@angular/router';
import { WhayUsComponent } from "./whay-us/whay-us.component";
import { VedioCarouselComponent } from "./vedio-carousel/vedio-carousel.component";
import { PackagesComponent } from "./packages/packages.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { LanguageService } from '../../core/language/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GalleryComponent } from "./gallery/gallery.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingComponent,
    AboutUsComponent,
    CInfoCardsComponent,
    ServicesComponent,
    WhayUsComponent,
    VedioCarouselComponent,
    PackagesComponent,
    TestimonialsComponent,
    ContactUsComponent,
    GalleryComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class HomeComponent implements OnInit {
  activateRute:ActivatedRoute = inject(ActivatedRoute);
        languageService = inject(LanguageService);
        destroyRef = inject(DestroyRef);
  router: Router = inject(Router);

  ngOnInit(): void {
   this.activateRute.fragment.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data:string  | null)=>{
   this.JumpToSection(data);
   });
  }
JumpToSection(section: any) {
  if (typeof document !== 'undefined' && section) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
     @HostListener('window:scroll')
  onScroll() {
    this.router.navigate([], {
      fragment: undefined,
      replaceUrl: true,
    });
  }
}
