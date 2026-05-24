import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { AnimationsService } from 'src/app/services/animations/animations.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent implements AfterViewInit {

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

    const pretitle = section.querySelector('.contact-pretitle');
    if (pretitle) {
      this.animationsService.observeElement(pretitle, { type: 'fadeInDown', duration: 1000 });
    }

    const title = section.querySelector('.contact-title');
    if (title) {
      this.animationsService.observeElement(title, { type: 'typewriter', delay: 300 });
    }

    const content = section.querySelector('.contact-content');
    if (content) {
      this.animationsService.observeElement(content, { type: 'morphIn', duration: 1000, delay: 1500 });
    }

    const actions = section.querySelector('.contact-actions');
    if (actions) {
      this.animationsService.observeElement(actions as HTMLElement, { type: 'scaleIn', duration: 800, delay: 2200 });
    }
  }
}
