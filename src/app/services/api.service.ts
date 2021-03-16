import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCompetitionFromServe(){
    return this.httpClient.get('https://api.football-data.org/v2/competitions?plan=TIER_ONE', {
      headers: {
        'X-Auth-Token': '6a241737d3884348995113520a71c47d'
      },
      observe: 'body',
      responseType: 'text'
    })
  }
}