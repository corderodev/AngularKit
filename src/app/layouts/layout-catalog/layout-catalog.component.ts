import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-layout-catalog',
  standalone: true,
  imports: [],
  templateUrl: './layout-catalog.component.html'
})
export class LayoutCatalogComponent {
  @Input() name!: string
}
