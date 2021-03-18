import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss']
})
export class CompetitionDetailComponent implements OnInit {

  content: string;
  competitionDetail: any = [];
  competitionMatch: any = [];

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private apiService: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.apiService.getCompetitionDetailFromServe(id).subscribe(
      data => {      
        this.competitionDetail = JSON.parse(data);
      }
    )

    this.apiService.getCompetitionMatchFromServe(id).subscribe(
      data => {      
        this.competitionMatch = JSON.parse(data);
        console.log(this.competitionMatch);
        this.update();
      }
    )
  }


  update(){
    for (let i = 0; i < this.competitionMatch['matches']
      .length; i++) {
      const group = this.competitionMatch['matches'][i]['group'];
      const stage = this.competitionMatch['matches'][i]['stage'];
      const winner = this.competitionMatch['matches'][i]['score']['winner'];

      // En cas de phase (stage) vide remplacer grace à la valeur dans group
      if (group == null) {
        if (stage == 'ROUND_OF_16') {
          this.competitionMatch['matches'][i]['group'] = 'Round of 16';
        } else if (stage == 'PLAY_OFF_ROUND') {
          this.competitionMatch['matches'][i]['group'] = 'Play Off';
        }
      } 
      // Si le vainqueur correspoond à "HOME_TEAM" alors on retourne le nom de l'équipe à domicil 
      if (winner == "HOME_TEAM") {
        this.competitionMatch['matches'][i]['score']['winner'] = this.competitionMatch['matches'][i]['homeTeam']['name'];

      // Si le vainqueur correspoond à "AWAY_TEAM" alors on retourne le nom de l'équipe exterieur
      } else if (winner == "AWAY_TEAM") {
        this.competitionMatch['matches'][i]['score']['winner'] = this.competitionMatch['matches'][i]['awayTeam']['name'];

      // Si le vainqueur correspoond à "HOME_TEAM" alors on retourne Match nul
      } else if (winner == "DRAW") {
        this.competitionMatch['matches'][i]['score']['winner'] = 'Match nul';

      }        
    } 
  }

  /**
   * modifie la couleur du status du match selon ces différentes valeurs
   * FINISHED
   * SCHEDULED
   * AWARDED
   * CANCELED
   * @param status 
   * @returns 
   */
  getStatusColor(status){  
    switch (status) {
      case 'FINISHED':
        return 'green';
      case 'SCHEDULED':
        return 'blue';
      case 'AWARDED':
        return '#F0D22E';
      case 'CANCELED':
        return 'red';
    }  
  }  

  /**
   * redirige sur la team cliquée
   * @param i 
   */
  onViewTeam(i: number){
    var idTeam = this.competitionDetail["seasons"][i]["winner"]["id"];
    console.log(idTeam);
  }

  /**
   * redirige sur le match cliqué
   * @param i 
   */
   onViewMatch(i: number){
    var idMatch = this.competitionMatch["matches"][i]["id"];
    console.log(idMatch);
  }
}
