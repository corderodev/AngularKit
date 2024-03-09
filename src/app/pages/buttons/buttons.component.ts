import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutCatalogComponent } from '@layouts/layout-catalog/layout-catalog.component'
import { ShowcaseComponent } from '@components/showcase/showcase.component'
import { ButtonPrimaryComponent } from '@angularkit/buttons/button-primary/button-primary.component'
import { ButtonSecondaryComponent } from '@angularkit/buttons/button-secondary/button-secondary.component'
import { ButtonOutlineComponent } from '@angularkit/buttons/button-outline/button-outline.component'
import { ButtonGhostComponent } from '@angularkit/buttons/button-ghost/button-ghost.component'
import { ButtonIconComponent } from '@angularkit/buttons/button-icon/button-icon.component'
import { ButtonLinkComponent } from '@angularkit/buttons/button-link/button-link.component'

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    CommonModule,
    LayoutCatalogComponent,
    ShowcaseComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    ButtonOutlineComponent,
    ButtonGhostComponent,
    ButtonLinkComponent,
    ButtonIconComponent
  ],
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  catalog = [
    {
      name: 'Button primary',
      showcase: ButtonPrimaryComponent,
      code: '<button class="px-5 py-1 text-zinc-100 bg-zinc-900 rounded-md hover:opacity-90 transition-opacity duration-200">Button</button>'
    },
    {
      name: 'Button secondary',
      showcase: ButtonSecondaryComponent,
      code: '<button class="px-5 py-1 text-zinc-100 bg-zinc-900/50 rounded-md border border-zinc-500 hover:bg-zinc-900 transition-colors duration-200">Button</button>'
    },
    {
      name: 'Button outline',
      showcase: ButtonOutlineComponent,
      code: '<button class="px-5 py-1 text-zinc-900 bg-transparent rounded-md border border-zinc-500 hover:text-zinc-100 hover:bg-zinc-900 transition-all duration-200">Button</button>'
    },
    {
      name: 'Button ghost',
      showcase: ButtonGhostComponent,
      code: '<button class="px-5 py-1 text-zinc-900 bg-transparent rounded-md hover:bg-zinc-900/20 transition-all duration-200">Button</button>'
    },
    {
      name: 'Button link',
      showcase: ButtonLinkComponent,
      code: '<a href="buttons" class="px-5 py-1 text-zinc-900 rounded-md hover:underline underline-offset-4 transition-all duration-200">Button</a>'
    },
    {
      name: 'Button icon',
      showcase: ButtonIconComponent,
      code: '<button class="flex items-center gap-1 px-5 py-1 text-zinc-100 bg-zinc-900 rounded-md hover:opacity-90 transition-opacity duration-200"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="21" height="21" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path d="M3 7l9 6l9 -6"/></svg>Button</button>'
    }
  ]
}
