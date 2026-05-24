import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { Subscription } from 'rxjs';

interface AnimationConfig {
  delay: number;
  element: string;
  action: () => void;
}

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: false
})
export class BannerComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly animationTimings = {
    pretitle: 100,
    name: 800,
    subtitle: 1800,
    description: 2400,
    buttons: 3000
  };

  private readonly typewriterConfig = {
    speed: 60,
    cursorBlinkRate: 500
  };

  private animationTimeouts: number[] = [];
  private animationsStarted = false;
  private loadingSubscription?: Subscription;

  constructor(
    public analyticsService: AnalyticsService,
    private elementRef: ElementRef,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.animationsStarted$.subscribe((shouldStart) => {
      if (shouldStart && !this.animationsStarted) {
        this.animationsStarted = true;
        this.initAnimations();
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.loadingService.animationsStarted && !this.animationsStarted) {
      this.animationsStarted = true;
      this.initAnimations();
    }
  }

  ngOnDestroy(): void {
    this.clearAllTimeouts();
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

  private initAnimations(): void {
    const banner = this.elementRef.nativeElement;

    const animations: AnimationConfig[] = [
      {
        delay: this.animationTimings.pretitle,
        element: '.banner-pretitle h1',
        action: () => this.animatePretitle(banner)
      },
      {
        delay: this.animationTimings.name,
        element: '.banner-name',
        action: () => this.animateTypewriter(banner)
      },
      {
        delay: this.animationTimings.subtitle,
        element: '.banner-subtitle',
        action: () => this.animateGlitch(banner)
      },
      {
        delay: this.animationTimings.description,
        element: '.banner-description',
        action: () => this.animateMorph(banner)
      },
      {
        delay: this.animationTimings.buttons,
        element: '.div-btn-banner',
        action: () => this.animateButtons(banner)
      }
    ];

    this.executeAnimations(animations);
  }

  private executeAnimations(animations: AnimationConfig[]): void {
    animations.forEach(animation => {
      const timeoutId = window.setTimeout(() => {
        animation.action();
      }, animation.delay);
      this.animationTimeouts.push(timeoutId);
    });
  }

  private animatePretitle(banner: HTMLElement): void {
    const pretitle = banner.querySelector('.banner-pretitle h1') as HTMLElement;
    if (!pretitle) return;
    pretitle.style.opacity = '1';
    pretitle.style.transform = 'translateY(0)';
  }

  private animateTypewriter(banner: HTMLElement): void {
    const nameElement = banner.querySelector('.banner-name') as HTMLElement;
    if (!nameElement) return;

    const originalText = nameElement.textContent || '';
    nameElement.innerHTML = `<span class="typed-text"></span><span class="cursor">|</span>`;

    const typedTextElement = nameElement.querySelector('.typed-text') as HTMLElement;
    const cursorElement = nameElement.querySelector('.cursor') as HTMLElement;

    nameElement.style.opacity = '1';
    this.startCursorBlink(cursorElement);
    this.startTypeEffect(typedTextElement, originalText);
  }

  private startCursorBlink(cursorElement: HTMLElement): void {
    let cursorVisible = true;
    setInterval(() => {
      cursorElement.style.opacity = cursorVisible ? '0' : '1';
      cursorVisible = !cursorVisible;
    }, this.typewriterConfig.cursorBlinkRate);
  }

  private startTypeEffect(textElement: HTMLElement, text: string): void {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      textElement.textContent = text.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex >= text.length) {
        clearInterval(typeInterval);
      }
    }, this.typewriterConfig.speed);
  }

  private animateGlitch(banner: HTMLElement): void {
    const subtitle = banner.querySelector('.banner-subtitle') as HTMLElement;
    if (!subtitle) return;
    subtitle.style.opacity = '1';
    subtitle.style.transform = 'translate(0) scale(1)';
    subtitle.setAttribute('data-text', subtitle.textContent || '');
    setTimeout(() => {
      subtitle.style.setProperty('--before-opacity', '0.8');
      subtitle.style.setProperty('--after-opacity', '0.8');
    }, 100);
  }

  private animateMorph(banner: HTMLElement): void {
    const description = banner.querySelector('.banner-description') as HTMLElement;
    if (!description) return;
    description.style.setProperty('opacity', '0', 'important');
    description.style.setProperty('transform', 'translateY(20px)', 'important');
    description.style.setProperty('filter', 'blur(3px)', 'important');
    description.style.setProperty('transition', 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 'important');
    requestAnimationFrame(() => {
      description.style.setProperty('opacity', '1', 'important');
      description.style.setProperty('transform', 'translateY(0)', 'important');
      description.style.setProperty('filter', 'blur(0px)', 'important');
    });
  }

  private animateButtons(banner: HTMLElement): void {
    const buttons = banner.querySelectorAll('.main-btn') as NodeListOf<HTMLElement>;
    buttons.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'scale(1) translateY(0)';
      }, i * 150);
    });
  }

  private clearAllTimeouts(): void {
    this.animationTimeouts.forEach(id => clearTimeout(id));
    this.animationTimeouts = [];
  }
}
