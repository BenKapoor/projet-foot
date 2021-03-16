import { RouterModule, Routes } from '@angular/router';

import { CompetitionDetailComponent } from './competitions/competition-detail/competition-detail.component';
import { CompetitionListComponent } from './competitions/competition-list/competition-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
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
