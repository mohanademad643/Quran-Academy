// import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-counter',
//     standalone:true,
//   imports: [TranslateModule],
//   templateUrl: './counter.component.html',
//   styleUrl: './counter.component.scss',
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class CounterComponent {
//    counters = [
//     {id:1, value: 100, label: 'home.WhayUs.counters.counter1.label', icon: 'pi pi-users' },
//     {id:2, value: 70, label: 'home.WhayUs.counters.counter2.label', icon: 'pi pi-book' },
//     { id:4,value: 1400, label: 'home.WhayUs.counters.counter3.label', icon: 'pi pi-user' },
//     { id:5,value: 2500, label: 'home.WhayUs.counters.counter4.label', icon: 'pi pi-clock' }
//   ];
  
//  animatedCounters = this.counters.map(() => signal(0));
//   private intervalId: any;
//   private observer?: IntersectionObserver;
//   private hasAnimated = false; 
//   private host = inject(ElementRef);
//   ngOnInit() {
//     this.initObserver();
//   }


// private initObserver() {
//   if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
//     this.observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !this.hasAnimated) {
//             this.hasAnimated = true;
//             this.startCounterAnimation();
//           }
//         });
//       },
//       { threshold: 0.4 }
//     );

//     this.observer.observe(this.host.nativeElement);
//   }
// }

//   private startCounterAnimation() {
//     this.intervalId = setInterval(() => {
//       this.counters.forEach((counter, i) => {
//         if (this.animatedCounters[i]() < counter.value) {
//           this.animatedCounters[i].set(
//             this.animatedCounters[i]() + Math.ceil(counter.value / 100)
//           );
//         }
//       });

//       if (this.counters.every((c, i) => this.animatedCounters[i]() >= c.value)) {
//         clearInterval(this.intervalId);
//       }
//     }, 30);
//   }
// }
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, signal, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnDestroy {
  counters = [
    { id: 1, value: 100, label: 'home.WhayUs.counters.counter1.label', icon: 'pi pi-users' },
    { id: 2, value: 70, label: 'home.WhayUs.counters.counter2.label', icon: 'pi pi-book' },
    { id: 3, value: 1400, label: 'home.WhayUs.counters.counter3.label', icon: 'pi pi-user' },
    { id: 4, value: 2500, label: 'home.WhayUs.counters.counter4.label', icon: 'pi pi-clock' }
  ];

  animatedCounters = this.counters.map(() => signal(0));

  private intervalId: any;
  private hasAnimated = false;
  private el = inject(ElementRef);

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkIfInView();
  }

  private checkIfInView() {
    if (typeof window === 'undefined' || this.hasAnimated) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;

    if (isVisible) {
      this.hasAnimated = true;
      this.startAnimation();
    }
  }

  private startAnimation() {
    const steps = 100;
    const interval = 30;

    this.intervalId = setInterval(() => {
      let allDone = true;

      this.counters.forEach((counter, i) => {
        const current = this.animatedCounters[i]();
        const increment = Math.ceil(counter.value / steps);
        const next = Math.min(counter.value, current + increment);

        this.animatedCounters[i].set(next);

        if (next < counter.value) allDone = false;
      });

      if (allDone) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.applyDateBasedIncrement(); 
      }
    }, interval);
  }

 
  private applyDateBasedIncrement() {
    const index = this.counters.findIndex(c => c.id === 3);
    if (index === -1) return;

    const baseDate = new Date(2025, 9, 24); 
    const now = new Date();

    const diffTime = now.getTime() - baseDate.getTime();
    const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const increments = Math.floor(daysPassed / 6);

    const baseValue = this.counters[index].value;
    const newValue = baseValue + increments;

    this.animatedCounters[index].set(newValue);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
