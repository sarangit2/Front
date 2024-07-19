import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './evenement/evenement.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ReglageComponent } from './reglage/reglage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LieuComponent } from './lieu/lieu.component';
import { EquipementComponent } from './equipement/equipement.component';
import { AppComponent } from './app.component';
import { applyMixins } from 'rxjs/internal/util/applyMixins';

const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'prestataires', component: PrestatairesComponent },
  // { path: 'evenements', component: EvenementsComponent },
  // { path: 'logistique', component: LogistiqueComponent },
  { path: 'equipement', component: EquipementComponent },
  { path: 'lieu', component: LieuComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'reglages', component: ReglageComponent },
 // { path: 'deconnexion', component: DeconnecterComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
