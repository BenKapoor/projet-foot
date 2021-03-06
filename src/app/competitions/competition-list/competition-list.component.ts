import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';
import { Competition } from './../../interfaces/icompetition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {

  competitions?: Array<Competition> = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    /**
     * Appel du service
     */
    this.apiService.getCompetitionFromServe().subscribe(
      data => {  
        // Récupération de l'array contenant les compétitions dispo
        this.competitions = data.competitions;
        // Update des données
        this.update();
      }, err => {
        this.competitions = (err.error).message;
      }
    )
  }
  

  /**
   * Fonction mettant à jour différentes données de l'array arrayCompetition
   */
  update(){
    for (let i = 0; i < this.competitions.length; i++) {
      const competition = this.competitions[i];
      
      // Changement de l'image du championnat brésilien
      if ((competition.code) == 'BSA') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/6/6c/Brasileir%C3%A3o-Chevrolet-2015.jpg';
      } 
      
      // Changement de l'image du championnat anglais D2 championship
      else if ((competition.code) == 'ELC') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c3/EFL_Championship.svg/langfr-800px-EFL_Championship.svg.png';
      } 
      
      // Changement de l'image du championnat anglais
      else if ((competition.code) == 'PL') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f2/Premier_League_Logo.svg/langfr-1920px-Premier_League_Logo.svg.png';
      } 
      
      // Changement de l'image de la coupe d'europe
      else if ((competition.code) == 'EC') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/3/32/UEFA_Euro_2020_logo.png';
      } 
      
      // Changement de l'image de la ligue des champions/ Champion league
      else if ((competition.code) == 'CL') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/UEFA_Champions_League_logo_2.svg/langfr-800px-UEFA_Champions_League_logo_2.svg.png';
      } 
      
      // Changement de l'image du championnat français l1
      else if ((competition.code) == 'FL1') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/langfr-800px-Logo_Ligue_1_Uber_Eats_2020.svg.png';
      } 
      
      // Changement de l'image du championnat allemand Bundesliga
      else if ((competition.code) == 'BL1') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/thumb/0/0a/Bundesliga-logo.svg/langfr-800px-Bundesliga-logo.svg.png';
      } 
      
      // Changement de l'image du championnat italien Serie A
      else if ((competition.code) == 'SA') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/b/be/Serie_A_logo_%282019%29.png';
      } 
      
      // Changement de l'image du championnat hollandais eredevisie
      else if ((competition.code) == 'DED') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eredivisie_nieuw_logo_2017-.svg/langfr-1280px-Eredivisie_nieuw_logo_2017-.svg.png';
      } 
      
      // Changement de l'image du championnat portugais Primeira liga
      else if ((competition.code) == 'PPL') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Liga_NOS_logo.png/800px-Liga_NOS_logo.png';
      } 
      
      // Changement de l'image du championnat espagnol Liga
      else if ((competition.code) == 'PD') {
        competition.emblemUrl = 'http://t0.gstatic.com/images?q=tbn:ANd9GcRmotfxAKxEas0sNVx-7B2_ex_T8PWM8yUaVNmsKVMtMgirh94X';
      } 

      // Changement de l'image du championnat du monde
      else if ((competition.code) == 'WC') {
        competition.emblemUrl = 'https://upload.wikimedia.org/wikipedia/fr/f/f7/FIFA_World_Cup_2018_Logo.png';
      }
    } 
  }

  /**
   * Fonction permettant de rediriger vers le détaail correspondant grace à l'id
   * @param i 
   * @returns 
   */
  onViewDetail(i: number){
    var idCompetition = this.competitions[i].id;
    
    return this.router.navigate(['/competitions', 'view', idCompetition]);
  }
  
}
