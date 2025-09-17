import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInfoCardsComponent } from './c-info-cards.component';

describe('CInfoCardsComponent', () => {
  let component: CInfoCardsComponent;
  let fixture: ComponentFixture<CInfoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CInfoCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CInfoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
