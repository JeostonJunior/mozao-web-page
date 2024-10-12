import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TimeTrackingService } from '../services/time-tracking.service';
import { ImageSwitcherService } from '../services/image-switch.service';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  language: string = 'pt';

  constructor(
    private route: ActivatedRoute,
    public timeTrackingService: TimeTrackingService, 
    public imageSwitcherService: ImageSwitcherService, 
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const lang = params.get('lang');
      if (lang) {
        this.language = lang;
      }
    });
  }
}
