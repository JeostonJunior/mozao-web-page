import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrigido para "styleUrls"
  imports: [MainComponent, RouterOutlet]
})
export class AppComponent { }
