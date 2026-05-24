import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
    selector: 'app-more-proyects',
    templateUrl: './more-proyects.component.html',
    styleUrls: ['./more-proyects.component.scss'],
    standalone: false
})
export class MoreProyectsComponent {
  openIndex: number | null = null;

  constructor(public analyticsService: AnalyticsService) {}

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
