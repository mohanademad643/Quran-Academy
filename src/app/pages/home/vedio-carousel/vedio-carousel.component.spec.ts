import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioCarouselComponent } from './vedio-carousel.component';

describe('VedioCarouselComponent', () => {
  let component: VedioCarouselComponent;
  let fixture: ComponentFixture<VedioCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VedioCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedioCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
