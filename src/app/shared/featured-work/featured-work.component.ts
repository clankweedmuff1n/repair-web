import { Component } from '@angular/core';
import {IShowcaseItem} from '@core/model/interfaces';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-featured-work',
  imports: [
    NgForOf
  ],
  template: `
    <div
      class="bg-[#e6f0c3] bg-repeat-x py-20"
      style="background-image: url('/assets/images/featured-work/featured-work-bg-top.gif'), url('/assets/images/featured-work/featured-work-bg-bottom.gif'); background-position: top, bottom;"
    >
      <div class="flex flex-row items-center justify-center">
        <article class="max-w-7xl">
          <div class="flex-row flex items-center justify-center">
            <div
              *ngFor="let i of featuredWork"
              class="w-full px-4 flex justify-center"
            >
              <a
                [attr.data-fancybox]="'gallery'"
                [attr.data-title]="i.caption"
                href="/assets/images/portfolio/{{ i.imageName }}.jpg"
                class="h-auto w-full mb-5 mb-0"
              >
                <img
                  src="/assets/images/portfolio/{{ i.imageName }}.jpg"
                  class="shadow-2xl"
                  alt="{{ i.caption }}"
                />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

  `,
})
export class FeaturedWorkComponent {
  public featuredWork: IShowcaseItem[] = [
    {
      caption: 'Featured Work | Interoute | Pricing',
      imageName: 'interoute-pricing',
    },
    {
      caption: 'Featured Work | Interoute | Basket',
      imageName: 'interoute-basket',
    },
    {
      caption: 'Featured Work | Interoute | Quick Deployment',
      imageName: 'interoute-quick-deployment',
    },
  ];
}
