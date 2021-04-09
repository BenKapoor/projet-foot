import { ActivatedRoute, Router } from '@angular/router';
import { ActiveCompetition, ITeam, Squad } from './../../interfaces/iteam';
import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  teamInfo?: ITeam;
  activeCompet?: Array<ActiveCompetition> = [];
  squad?: Array<Squad> = [];

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.apiService.getTeamFromServe(id).subscribe(
      data => {
        this.teamInfo = data;
        this.activeCompet = data.activeCompetitions;
        this.squad = data.squad;
      }, err => {
        this.teamInfo = (err.error).message;
        this.activeCompet = (err.error).message;
        this.squad = (err.error).message;
      }
    )
  }

  /**
   * Redirige vers le détail de la compétition dont l'id est récupéré et passé en paramètre
   * @param i 
   */
  onViewCompetition(i: number){
    var idCompetition = this.activeCompet[i].id;
    this.router.navigate(['/competitions', 'view', idCompetition]);
  }

}
