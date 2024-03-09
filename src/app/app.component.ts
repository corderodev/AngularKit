import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from '@pages/home/home.component'
import { HeaderComponent } from '@sections/header/header.component'
import { FooterComponent } from '@sections/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
