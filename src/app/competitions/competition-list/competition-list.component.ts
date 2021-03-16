import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {

  content: string;
  competitions: any = [];
  test: string;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getCompetitionFromServe().subscribe(
      data => {      
        this.content = JSON.parse(data);
        this.competitions = this.content['competitions']
        console.log(this.competitions);
        this.update();
      }
    )

    
  }

  update(){
    for (let i = 0; i < this.competitions
      .length; i++) {
      const element = this.competitions[i];
       
      console.log((this.competitions[i]['code']));
      
      // Changement de l'image du championnat brésilien
      if ((this.competitions[i]['code']) == 'BSA') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/6/6c/Brasileir%C3%A3o-Chevrolet-2015.jpg';
      } 
      
      // Changement de l'image du championnat anglais D2 championship
      else if ((this.competitions[i]['code']) == 'ELC') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c3/EFL_Championship.svg/langfr-800px-EFL_Championship.svg.png';
      } 
      
      // Changement de l'image du championnat anglais
      else if ((this.competitions[i]['code']) == 'PL') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f2/Premier_League_Logo.svg/langfr-1920px-Premier_League_Logo.svg.png';
      } 
      
      // Changement de l'image de la coupe d'europe
      else if ((this.competitions[i]['code']) == 'EC') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/3/32/UEFA_Euro_2020_logo.png';
      } 
      
      // Changement de l'image de la ligue des champions/ Champion league
      else if ((this.competitions[i]['code']) == 'CL') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/UEFA_Champions_League_logo_2.svg/langfr-800px-UEFA_Champions_League_logo_2.svg.png';
      } 
      
      // Changement de l'image du championnat français l1
      else if ((this.competitions[i]['code']) == 'FL1') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/langfr-800px-Logo_Ligue_1_Uber_Eats_2020.svg.png';
      } 
      
      // Changement de l'image du championnat allemand Bundesliga
      else if ((this.competitions[i]['code']) == 'BL1') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/thumb/0/0a/Bundesliga-logo.svg/langfr-800px-Bundesliga-logo.svg.png';
      } 
      
      // Changement de l'image du championnat italien Serie A
      else if ((this.competitions[i]['code']) == 'SA') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/b/be/Serie_A_logo_%282019%29.png';
      } 
      
      // Changement de l'image du championnat hollandais eredevisie
      else if ((this.competitions[i]['code']) == 'DED') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eredivisie_nieuw_logo_2017-.svg/langfr-1280px-Eredivisie_nieuw_logo_2017-.svg.png';
      } 
      
      // Changement de l'image du championnat portugais Primeira liga
      else if ((this.competitions[i]['code']) == 'PPL') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Liga_NOS_logo.png/800px-Liga_NOS_logo.png';
      } 
      
      // Changement de l'image du championnat espagnol Liga
      else if ((this.competitions[i]['code']) == 'PD') {
        this.competitions[i]['emblemUrl'] = 'http://t0.gstatic.com/images?q=tbn:ANd9GcRmotfxAKxEas0sNVx-7B2_ex_T8PWM8yUaVNmsKVMtMgirh94X';
        this.competitions[i]['name'] = 'Liga';
      } 

      // Changement de l'image du championnat du monde
      else if ((this.competitions[i]['code']) == 'WC') {
        this.competitions[i]['emblemUrl'] = 'https://upload.wikimedia.org/wikipedia/fr/f/f7/FIFA_World_Cup_2018_Logo.png';
      }
    } 
  }
}
