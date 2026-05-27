import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MentionsLegalesComponent } from './components/legal/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './components/legal/politique-confidentialite/politique-confidentialite.component';
import { CharteBacklabComponent } from './components/legal/charte-backlab/charte-backlab.component';

const routes: Routes = [

  {path: 'mentions-legales',          component: MentionsLegalesComponent},
  {path: 'politique-confidentialite', component: PolitiqueConfidentialiteComponent},
  {path: 'charte-backlab',            component: CharteBacklabComponent},

  {path: ':language?',      component: HomeComponent},

  {path: '**', pathMatch: 'full', redirectTo: '/'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
