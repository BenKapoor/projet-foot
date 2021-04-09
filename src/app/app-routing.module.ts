import { RouterModule, Routes } from '@angular/router';

import { CompetitionDetailComponent } from './competitions/competition-detail/competition-detail.component';
import { CompetitionListComponent } from './competitions/competition-list/competition-list.component';
import { MatchDetailComponent } from './matchs/match-detail/match-detail.component';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';

const routes: Routes = [
  { path: 'search', component: SearchBarComponent},
  { path: 'teams/view/:id', component: TeamDetailComponent },
  { path: 'matchs/view/:id', component: MatchDetailComponent },
  { path: 'competitions/view/:id', component: CompetitionDetailComponent },
  { path: 'competitions', component: CompetitionListComponent },
  { path: '', redirectTo: 'competitions', pathMatch: 'full' },
  { path: '**', redirectTo: 'competitions' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
