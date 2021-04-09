import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CompetitionCarouselComponent } from './competition-carousel/competition-carousel.component';
import { CompetitionDetailComponent } from './competitions/competition-detail/competition-detail.component';
import { CompetitionListComponent } from './competitions/competition-list/competition-list.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatchDetailComponent } from './matchs/match-detail/match-detail.component';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    CompetitionDetailComponent,
    MatchDetailComponent,
    CompetitionCarouselComponent,
    HeaderComponent,
    TeamDetailComponent,
    SearchBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }