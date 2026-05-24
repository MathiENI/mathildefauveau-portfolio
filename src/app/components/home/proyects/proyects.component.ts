import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
    selector: 'app-proyects',
    templateUrl: './proyects.component.html',
    styleUrls: ['./proyects.component.scss'],
    standalone: false
})
export class ProyectsComponent {
  constructor(public analyticsService: AnalyticsService) { }
}
