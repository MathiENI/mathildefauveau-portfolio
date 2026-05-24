import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { AnimationsService } from 'src/app/services/animations/animations.service';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss'],
    standalone: false
})
export class JobsComponent implements AfterViewInit {

  constructor(
    public analyticsService: AnalyticsService,
    private animationsService: AnimationsService,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    const section = this.elementRef.nativeElement;

    const title = section.querySelector('.about-title');
    if (title) {
      this.animationsService.observeElement(title, { type: 'slideInUp', duration: 1000 });
    }

    const cards = section.querySelectorAll('.product-card');
    cards.forEach((card: HTMLElement, i: number) => {
      this.animationsService.observeElement(card, {
        type: 'fadeInUp',
        duration: 700,
        delay: 200 + i * 120
      });
    });
  }
}
