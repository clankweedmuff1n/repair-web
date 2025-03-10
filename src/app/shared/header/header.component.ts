import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <header id="back-to-top">
      <div class="bg-gray-900">
        <div class="container mx-auto h-full">
          <div class="flex items-center h-full">
            <a class="no-underline w-full lg:w-5/12 py-10 font-[Trajan] text-secondary" [routerLink]="['/']">
              <img class="object-contain w-24" src="/assets/images/portfolio/logo.png" alt="Logo" />
            </a>
            <nav class="w-full lg:w-7/12 lg:text-right">
              <ul class="m-0 p-0 pb-5 lg:pb-0">
                <li class="inline-flex">
                  <a
                    class="no-underline text-3xl py-5 pr-10 text-white hover:text-secondary"
                    [routerLink]="['/about-me']"
                    [routerLinkActive]="'text-secondary'"
                  >О НАС</a>
                </li>
                <li class="inline-flex">
                  <a
                    class="no-underline text-3xl py-5 pr-10 text-white hover:text-secondary"
                    [routerLink]="['/my-skills']"
                    [routerLinkActive]="'text-secondary'"
                  >РЕМОНТ</a>
                </li>
                <li class="inline-flex">
                  <a
                    class="no-underline text-3xl py-5 pr-10 text-white hover:text-secondary"
                    [routerLink]="['/portfolio']"
                    [routerLinkActive]="'text-secondary'"
                  >ОБСЛУЖИВАНИЕ</a>
                </li>
                <li class="inline-flex">
                  <a
                    class="no-underline text-3xl py-5 pr-10 lg:pr-0 text-white hover:text-secondary"
                    [routerLink]="['/contact-me']"
                    [routerLinkActive]="'text-secondary'"
                  >НАШИ ПАРТНЕРЫ</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {

}
