import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenubarEndComponent } from './nav-menubar-end.component';

describe('NavMenubarEndComponent', () => {
  let component: NavMenubarEndComponent;
  let fixture: ComponentFixture<NavMenubarEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenubarEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenubarEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
