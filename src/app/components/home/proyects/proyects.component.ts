import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
    selector: 'app-proyects',
    templateUrl: './proyects.component.html',
    styleUrls: ['./proyects.component.scss'],
    standalone: false
})
export class ProyectsComponent implements OnInit {

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}

}
