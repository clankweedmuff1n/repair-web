import { Component } from '@angular/core';
import {IntroComponent} from '@shared/intro/intro.component';
import {FeaturedWorkComponent} from '@shared/featured-work/featured-work.component';
import {RecommendationsComponent} from '@shared/recommendations/recommendations.component';
import {StatsComponent} from '@shared/stats/stats.component';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    FeaturedWorkComponent,
    RecommendationsComponent,
    StatsComponent
  ],
  template: `
    <app-intro></app-intro>
    <app-featured-work></app-featured-work>
    <app-recommendations></app-recommendations>
    <app-stats></app-stats>
  `,
})
export class HomeComponent {

}
