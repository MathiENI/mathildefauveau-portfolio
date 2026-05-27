import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charte-backlab',
  templateUrl: './charte-backlab.component.html',
  styleUrls: ['../legal.component.scss'],
  standalone: false
})
export class CharteBacklabComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
