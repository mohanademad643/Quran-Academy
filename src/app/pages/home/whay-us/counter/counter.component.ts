import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-counter',
    standalone:true,
  imports: [TranslateModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
   counters = [
    {id:1, value: 100, label: 'home.WhayUs.counters.counter1.label', icon: 'pi pi-users' },
    {id:2, value: 70, label: 'home.WhayUs.counters.counter2.label', icon: 'pi pi-book' },
    { id:4,value: 1400, label: 'home.WhayUs.counters.counter3.label', icon: 'pi pi-user' },
    { id:5,value: 2500, label: 'home.WhayUs.counters.counter4.label', icon: 'pi pi-clock' }
  ];
  
 animatedCounters = this.counters.map(() => signal(0));
  private intervalId: any;
  private observer?: IntersectionObserver;
  private hasAnimated = false; 
  private host = inject(ElementRef);
  ngOnInit() {
    this.initObserver();
  }


private initObserver() {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.startCounterAnimation();
          }
        });
      },
      { threshold: 0.4 }
    );

    this.observer.observe(this.host.nativeElement);
  }
}

  private startCounterAnimation() {
    this.intervalId = setInterval(() => {
      this.counters.forEach((counter, i) => {
        if (this.animatedCounters[i]() < counter.value) {
          this.animatedCounters[i].set(
            this.animatedCounters[i]() + Math.ceil(counter.value / 100)
          );
        }
      });

      if (this.counters.every((c, i) => this.animatedCounters[i]() >= c.value)) {
        clearInterval(this.intervalId);
      }
    }, 30);
  }
}
