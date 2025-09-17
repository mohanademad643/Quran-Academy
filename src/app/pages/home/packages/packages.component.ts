import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-packages',
    standalone:true,
  imports: [TranslateModule, CurrencyPipe],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PackagesComponent {
  packages = [
    {
      name: 'home.packages.silver.name',
      price: 43,
      duration: 'home.packages.silver.duration',
      classes: 'home.packages.silver.classes',
      perClass: 'home.packages.silver.perClass',
    },
    {
      name: 'home.packages.golden.name',
      price: 64,
      duration: 'home.packages.golden.duration',
      classes: 'home.packages.golden.classes',
      perClass: 'home.packages.golden.perClass',
      highlight: true,
    },
    {
      name: 'home.packages.heroes.name',
      price: 85,
      duration: 'home.packages.heroes.duration',
      classes: 'home.packages.heroes.classes',
      perClass: 'home.packages.heroes.perClass',
    },
    {
      name: 'home.packages.family.name',
      price: 120,
      duration: 'home.packages.family.duration',
      classes: 'home.packages.family.classes',
      perClass: 'home.packages.family.perClass',
    },
    {
      name: 'home.packages.diamond.name',
      price: 130,
      duration: 'home.packages.diamond.duration',
      classes: 'home.packages.diamond.classes',
      perClass: 'home.packages.diamond.perClass',
    },
  ];
}
