import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhayUsComponent } from './whay-us.component';

describe('WhayUsComponent', () => {
  let component: WhayUsComponent;
  let fixture: ComponentFixture<WhayUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhayUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhayUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
