import { Component } from '@angular/core'
import { urls } from '@consts/consts'

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  repo = [...urls.repo]
}
