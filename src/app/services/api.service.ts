import { Competition, ICompetition } from './../interfaces/icompetition';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICompetitionMatch, Match, Scorer } from './../interfaces/icompetition-match';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ICompetitionStanding } from './../interfaces/icompetition-standing';
import { IListteam } from './../interfaces/ilistteam';
import { IMatchVS } from './../interfaces/imatch-vs';
import { ITeam } from './../interfaces/iteam';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Define API
  apiURL = 'https://api.football-data.org/v2';

  constructor(private httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': '6a241737d3884348995113520a71c47d'
    })
  } 

  /**
   * Liste des compétitions autorisée par la souscription TIER ONE
   * @returns 
   */
  getCompetitionFromServe(): Observable<ICompetition>{
    return this.httpClient.get<ICompetition>(this.apiURL + '/competitions?plan=TIER_ONE', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /**
   * Detail général de la ligue
   * hsitorique des vainqueurs
   * @param id 
   * @returns 
   */
  getCompetitionDetailFromServe(id: number): Observable<Competition>{
    return this.httpClient.get<Competition>(this.apiURL + '/competitions/'+ id +'?plan=TIER_ONE', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /**
   * Détails des rencontres passées, en cours et à venir d'une compétition
   * @param id 
   * @returns 
   */
  getCompetitionMatchFromServe(id: number): Observable<ICompetitionMatch>{
    return this.httpClient.get<ICompetitionMatch>(this.apiURL + '/competitions/'+ id +'/matches?plan=TIER_ONE', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /**
   * Classement des equipes
   * @param type away ou home si signifié
   * @returns 
   */
  getCompetitionMatchClassementFromServe(id: number, type?: string): Observable<ICompetitionStanding>{
    return this.httpClient.get<ICompetitionStanding>(this.apiURL + '/competitions/'+ id +'/standings?standingType='+ type, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /**
   * Classement des butteurs de la compétition
   * @param type away ou home si signifié
   * @returns 
   */
  getCompetitionScorersFromServe(id: number): Observable<ICompetitionMatch>{
    return this.httpClient.get<ICompetitionMatch>(this.apiURL + '/competitions/'+ id +'/scorers', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /**
   * Classement des butteurs de la compétition
   * @param type away ou home si signifié
   * @returns 
   */
   getMatchDetailFromServe(id: number): Observable<IMatchVS>{
    return this.httpClient.get<IMatchVS>(this.apiURL + '/matches/'+ id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère l'équipe selon l'id
   * @param id 
   * @returns 
   */
   getTeamFromServe(id: number): Observable<ITeam>{

    return this.httpClient.get<ITeam>(this.apiURL + '/teams/'+ id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère l'équipe selon l'id
   * @param id 
   * @returns 
   */
   getAllTeamFromServe(): Observable<IListteam>{

    return this.httpClient.get<IListteam>(this.apiURL + '/teams?season=2020', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
