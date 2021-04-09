import { ActivatedRoute, Router } from '@angular/router';
import { Area, Competition, CurrentSeason, ICompetition, Winner } from './../../interfaces/icompetition';
import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';
import { Match } from 'src/app/interfaces/icompetition-match';
import { Scorer } from './../../interfaces/icompetition-match';
import { Season } from './../../interfaces/icompetition-sub-resource';
import { Standing } from './../../interfaces/icompetition-standing';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss']
})
export class CompetitionDetailComponent implements OnInit {

  competition?: ICompetition;
  competitionDetail?: Competition; // Informations générales contenant competitionCurrentSeason et competitionArea
  area?: Area; // Informations de la zone de la compétition
  currentSeaon?: CurrentSeason; // Informations de la saison en cours
  seasons?: Array<Season> = []; // Informations de toutes les saisons
 
  matches?: Array<Match> = []; // Informations concernant les matchs de la compétition

  buteurs?: Array<Scorer> = []; // Informations sur les 10 meilleurs buteurs de la compétition

  standings?: Array<Standing> = []; // Informations détaillées sur les rencontres

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private apiService: ApiService) { }

  ngOnInit(): void {
    //Récupération de l'id dans l'url grace à ActiveRoute
    const id = this.route.snapshot.params['id'];

    /**
     * Appel du service Detaillant la competition
     */
    this.apiService.getCompetitionDetailFromServe(id).subscribe(
      data => {      
        this.competitionDetail = data;
        console.log(data);
        
        this.area = data.area;
        this.currentSeaon = data.currentSeason;
        this.seasons = data.seasons;
      },
      err => {
        this.competitionDetail = (err.error).message;
      }
    );

    /**
     * Appel du service listant les matchs de la competition
     */
    this.apiService.getCompetitionMatchFromServe(id).subscribe(
      data => {      
        this.matches = data.matches;
        this.update();        
      },
      err => {
        this.matches = (err.error).message;
      }
    );

    /**
     * Appel du service classant les equipes de la compétition
     */
    this.apiService.getCompetitionMatchClassementFromServe(id,'TOTAL').subscribe(
      data => {          
        this.standings = data.standings; // récupérations des confrontations      
      },
      err => {
        this.standings = (err.error).message;
      }
    );

    /**
     * Appel du service classant les buteurs de la compétition
     */
    this.apiService.getCompetitionScorersFromServe(id).subscribe(
      data => {      
        this.buteurs = data.scorers;
      },
      err => {
        this.buteurs = (err.error).message;
      }
    );  
  }


  update(){
    // Boucle sur l'ensemble des matchs récupérés
    for (let i = 0; i < this.matches.length; i++) {
      const group = this.matches[i].group;
      const stage = this.matches[i].stage;

      // En cas de phase (stage) vide remplacer grace à la valeur dans group
      if (group == null) {
        if (stage == 'ROUND_OF_16') {
          this.matches[i].group = 'Round of 16';
        } else if (stage == 'PLAY_OFF_ROUND') {
          this.matches[i].group = 'Play Off';
        } else if (stage == 'QUARTER_FINALS') {
          this.matches[i].group = 'Quarter Finals';
        }
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
  getStatusColor(statuts){  
    switch (statuts) {
      case 'FINISHED':
        return 'green';
      case 'SCHEDULED':
        return 'blue';
      case 'AWARDED':
        return '#F0D22E';
      case 'CANCELED':
        return 'red';
      case 'POSTPONED':
        return 'red';
    }  
  }  

  /**
   * redirige sur la team cliquée
   * @param i 
   */
  onViewTeam(i: number){
    var idTeam = this.competitionDetail.seasons[i].winner.id;
    this.router.navigate(['/teams', 'view', idTeam]);
  }

  /**
   * redirige sur le match cliqué
   * @param i 
   */
   onViewMatch(i: number){
    var idMatch = this.matches[i].id;
    this.router.navigate(['/matchs', 'view', idMatch])
  }

  /**
   * redirige sur la team du classement d'une ligue selectionée
   * @param i 
   */
   onViewTeamClassementLigue(i: number){
    var idTeam = this.standings[0].table[i].team.id;  
    this.router.navigate(['/teams', 'view', idTeam]);
  }
}
