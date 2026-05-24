import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { AnimationsService } from 'src/app/services/animations/animations.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent implements AfterViewInit {

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

    const titles = section.querySelectorAll('.about-title');
    titles.forEach((el: HTMLElement) => {
      this.animationsService.observeElement(el, { type: 'slideInUp', duration: 1000 });
    });

    const cards = section.querySelectorAll('.problem-card');
    cards.forEach((card: HTMLElement, i: number) => {
      this.animationsService.observeElement(card, {
        type: 'fadeInUp',
        duration: 700,
        delay: 200 + i * 150
      });
    });

    const manifesto = section.querySelector('.vision-manifesto');
    if (manifesto) {
      this.animationsService.observeElement(manifesto as HTMLElement, {
        type: 'morphIn',
        duration: 1000,
        delay: 300
      });
    }
  }
}
