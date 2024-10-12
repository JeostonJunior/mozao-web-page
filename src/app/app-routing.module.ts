import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent }, // Rota padrão
  { path: 'pt', component: MainComponent }, // Rota para Português
  { path: 'en', component: MainComponent }  // Rota para Inglês
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
