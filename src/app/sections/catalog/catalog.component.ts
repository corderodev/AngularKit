import { Component } from '@angular/core'
import { CardComponent } from 'src/app/components/card/card.component'
import { categories } from '@angularkit/categories.json'
import { urls } from '@consts/consts'

@Component({
  selector: 'app-section-catalog',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  upcoming_components = urls.upcoming_components
  catalog = categories
}
