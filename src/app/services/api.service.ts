import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Liste des compétitions autorisée par l'abonnement TIER_ONE
   * @returns 
   */
  getCompetitionFromServe(){
    return this.httpClient.get('https://api.football-data.org/v2/competitions?plan=TIER_ONE', {
      headers: {
        'X-Auth-Token': '6a241737d3884348995113520a71c47d'
      },
      observe: 'body',
      responseType: 'text'
    })
  }

  /**
   * Detail général de la ligue
   * hsitorique des vainqueurs
   * @param id 
   * @returns 
   */
  getCompetitionDetailFromServe(id: number){
    return this.httpClient.get('http://api.football-data.org/v2/competitions/'+ id +'?plan=TIER_ONE', {
      headers: {
        'X-Auth-Token': '6a241737d3884348995113520a71c47d'
      },
      observe: 'body',
      responseType: 'text'
    })
  }

  getCompetitionMatchFromServe(id: number){
    return this.httpClient.get('http://api.football-data.org/v2/competitions/'+ id +'/matches?plan=TIER_ONE', {
      headers: {
        'X-Auth-Token': '6a241737d3884348995113520a71c47d'
      },
      observe: 'body',
      responseType: 'text'
    })
  }
}
