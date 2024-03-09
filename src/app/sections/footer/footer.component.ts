import { Component } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-section-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  urls = {
    corderodev: 'https://github.com/corderodev'
  }
  safeUrls: { [key: string]: SafeResourceUrl }
  currentYear: number

  constructor (private sanitizer: DomSanitizer) {
    this.currentYear = new Date().getFullYear()
    this.safeUrls = {
      corderodev: this.sanitizer.bypassSecurityTrustUrl(this.urls.corderodev)
    }
  }
}
