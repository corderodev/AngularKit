import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase.component.html'
})
export class ShowcaseComponent {
  @Input() component!: {
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    showcase: any
    code: string
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.component.code)
  }
}
