import { Component } from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    FontAwesomeModule
  ],
  template: `
    <footer>
      <div class="pt-24 pb-8 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 lg:w-1/3 pb-12 px-4">
              <dl class="text-white flex flex-wrap">
                <dt class="w-full pb-12 text-[1.8rem] font-trajan text-yellow-500">
                  Navigation <span class="text-white">Links</span>
                </dt>
                <dd class="w-1/2">
                  <a class="text-white no-underline hover:underline" [routerLink]="['/about-me']">About Me</a>
                </dd>
                <dd class="w-1/2">
                  <a class="text-white no-underline hover:underline" [routerLink]="['/my-skills']">My Skills</a>
                </dd>
                <dd class="w-1/2">
                  <a class="text-white no-underline hover:underline" [routerLink]="['/portfolio']">Portfolio</a>
                </dd>
                <dd class="w-1/2">
                  <a class="text-white no-underline hover:underline" [routerLink]="['/contact-me']">Contact Me</a>
                </dd>
              </dl>
            </div>
            <!-- Address -->
            <div class="w-full md:w-1/2 lg:w-1/3 pb-12 px-4">
              <dl class="text-white flex flex-wrap">
                <dt class="w-full pb-12 text-[1.8rem] font-trajan text-yellow-500">
                  Адрес
                </dt>
                <dd class="w-5/6">
                  ИП Коржаев П.А. Республика Беларусь, 220013, г.Минск, пер. Я.Коласа д.6, кв 75
                </dd>
              </dl>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 pb-12 px-4">
              <dl class="text-white">
                <dt class="pb-12 text-[1.8rem] font-trajan text-yellow-500">
                  Contact <span class="text-white">Info</span>
                </dt>
                <dd class="mb-4">
                  <a class="text-white no-underline hover:underline" href="tel:07932 566 488">
                    <fa-icon class="pr-3" [flip]="'horizontal'" [icon]="faPhone"></fa-icon>
                    07932 566 488
                  </a>
                </dd>
                <dd>
                  <a class="text-white no-underline hover:underline" href="mailto:omar.creative.dev@gmail.com?subject=Creative%20Developments">
                    <fa-icon class="pr-3" [icon]="faEnvelope"></fa-icon>
                    omar.creative.dev&#64;gmail.com
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </footer>

  `,
})
export class FooterComponent {
  public faEnvelope: IconDefinition = faEnvelope;
  public faPhone: IconDefinition = faPhone;
}
