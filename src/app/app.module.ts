import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CompetitionListComponent } from './competitions/competition-list/competition-list.component';
import { CompetitionDetailComponent } from './competitions/competition-detail/competition-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    CompetitionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }