import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutCatalogComponent } from '@layouts/layout-catalog/layout-catalog.component'
import { ShowcaseComponent } from '@components/showcase/showcase.component'
import { SmallAlertInfoComponent } from '@angularkit/alerts/small-alert-info/small-alert-info.component'
import { SmallAlertSuccessComponent } from '@angularkit/alerts/small-alert-success/small-alert-success.component'
import { SmallAlertDangerComponent } from '@angularkit/alerts/small-alert-danger/small-alert-danger.component'
import { SmallAlertWarningComponent } from '@angularkit/alerts/small-alert-warning/small-alert-warning.component'

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    LayoutCatalogComponent,
    ShowcaseComponent,
    SmallAlertDangerComponent,
    SmallAlertInfoComponent,
    SmallAlertSuccessComponent,
    SmallAlertWarningComponent
  ],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {
  catalog = [
    {
      name: 'Small alert info',
      showcase: SmallAlertInfoComponent,
      code: '<div class="bg-blue-300/50 py-3 px-4 rounded-md flex items-center justify-between gap-10"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-hexagon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg><p class="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div><button class="active:scale-95"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div>'
    },
    {
      name: 'Small alert success',
      showcase: SmallAlertSuccessComponent,
      code: '<div class="bg-green-300/50 py-3 px-4 rounded-md flex items-center justify-between gap-10"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"/><path d="M9 12l2 2l4 -4"/></svg><p class="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div><button class="active:scale-95"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div>'
    },
    {
      name: 'Small alert warning',
      showcase: SmallAlertWarningComponent,
      code: '<div class="bg-yellow-300/50 py-3 px-4 rounded-md flex items-center justify-between gap-10"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-octagon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg><p class="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div><button class="active:scale-95"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div>'
    },
    {
      name: 'Small alert danger',
      showcase: SmallAlertDangerComponent,
      code: '<div class="bg-red-300/50 py-3 px-4 rounded-md flex items-center justify-between gap-10"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/><path d="M12 16h.01"/></svg><p class="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div><button class="active:scale-95"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div>'
    }
  ]
}
