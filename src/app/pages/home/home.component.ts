import { Component } from '@angular/core'
import { HeroComponent } from '@sections/hero/hero.component'
import { CatalogComponent } from '@sections/catalog/catalog.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CatalogComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
