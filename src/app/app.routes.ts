import { Routes } from '@angular/router'
import { HomeComponent } from '@pages/home/home.component'
import { AlertsComponent } from '@pages/alerts/alerts.component'
import { ButtonsComponent } from '@pages/buttons/buttons.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  }
]
