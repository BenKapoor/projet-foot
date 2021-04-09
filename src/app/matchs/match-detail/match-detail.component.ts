import { ActivatedRoute, Router } from '@angular/router';
import { Competition, ExtraTime, FullTime, HalfTime, Head2Head, Head2HeadAwayTeam, Head2HeadHomeTeam, IMatchVS, MatchHomeTeam, Referee, Score } from './../../interfaces/imatch-vs';
import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';
import { Chart } from 'chart.js';
import { Match } from 'src/app/interfaces/imatch-vs';

declare var require: any;

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {

  match?: IMatchVS;
  matchDetail?: Match;
  head2dhead?: Head2Head;
  
  awayTeam?: Head2HeadAwayTeam;
  homeTeam?: Head2HeadHomeTeam;

  competition: Competition;

  score: Score;
  scoreExtra: ExtraTime;
  scoreFull: FullTime;
  scoreHalf: HalfTime;

  referees?: Array<Referee> = [];
  
  scorePenalties: any = [];
  chart = []; // This will hold our chart info

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private apiService: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.apiService.getMatchDetailFromServe(id).subscribe(
      data => {

        this.match = data;
        this.matchDetail = data.match;
        this.head2dhead = data.head2head;
        
        this.homeTeam = this.head2dhead.homeTeam;
        this.awayTeam = this.head2dhead.awayTeam;

        this.competition = this.matchDetail.competition;
        this.referees = this.matchDetail.referees;

        this.score = this.matchDetail.score;
        this.scoreExtra = this.score.extraTime;
        this.scoreFull = this.score.fullTime;
        this.scoreHalf = this.score.halfTime;
        this.scorePenalties = this.score.penalties;


        // Data transformées et utilisées pour le graph
        // Data equipe exter
        let scoreAwayTeam = [];
        let nameAwayTeam = this.awayTeam.name;
        scoreAwayTeam.push(this.awayTeam.wins);
        scoreAwayTeam.push(this.awayTeam.draws);
        scoreAwayTeam.push(this.awayTeam.losses);

        // Data equipe domicile
        let scoreHomeTeam = [];
        let nameHomeTeam = this.homeTeam.name;
        scoreHomeTeam.push(this.homeTeam.wins);
        scoreHomeTeam.push(this.homeTeam.draws);
        scoreHomeTeam.push(this.homeTeam.losses);   
        console.log(nameHomeTeam);

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ["Victoires", "Egalités", "Défaites"],
            datasets: [
              { 
                label: nameHomeTeam,
                data: scoreHomeTeam,
                borderColor: "#3cba9f",
                fill: false,
                backgroundColor: "#3D43D4"
              },
              { 
                label: nameAwayTeam,
                data: scoreAwayTeam,
                borderColor: "#3cba9f",
                fill: false,
                backgroundColor: "#71FA26"
              }
            ]
          },
          options: {
            legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
            },
            scales: {
              xAxes: [{
                display: true,
              }],
              yAxes: [{
                display: true,
                ticks: {
                  stepSize: 1,
                  beginAtZero: true   // minimum value will be 0.
                }
              }]
            },
            title: {
              display: true,
              text: 'Historique des rencontres : ' + nameHomeTeam + ' VS ' + nameAwayTeam
            }
          }
        }
        );
      }, err => {
        this.matchDetail = (err.error).message;
      }
    );
  }
}
