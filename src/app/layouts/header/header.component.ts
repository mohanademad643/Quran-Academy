import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from "./top-header/top-header.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TopHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush

})
export class HeaderComponent {
   
}
