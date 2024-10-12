import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { MainComponent } from './app/main/main.component'; // Importe o MainComponent
import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':lang', component: MainComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provedor de roteamento com as rotas definidas diretamente
  ]
}).catch(err => console.error(err));

