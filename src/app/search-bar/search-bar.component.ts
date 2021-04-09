import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { ApiService } from './../services/api.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Team } from './../interfaces/ilistteam';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  // Search bar
  myControl = new FormControl();
  filteredTeam: Observable<Team[]>;
  resulSearch?: Array<Team> = [];

  // Objet team
  teams?: Array<Team> = [];

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    
    this._callApi();

    // Lors de l'init initialise le filtre de la recherche
    // passe filteredTeam récupérant le string envoyé coté html 
    this.filteredTeam = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(team => team ? this._filterTeams(team) : this.teams.slice())
      );
  }

  /**
   * Appel de l'api
   */
  private _callApi(){ 
    this.apiService.getAllTeamFromServe().subscribe(
      data => {
        this.teams = data.teams;
      }
    )
  }

  /**
   * Filtre les équipes à partir de la valeur récupée (value) et retourne ne nom de l'équipe
   * @param value 
   * @returns 
   */
  private _filterTeams(value: string): Team[] {
    const filterValue = value.toLowerCase();

    return this.teams.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  /**
   * Fonction permettant de rediriger vers le détail correspondant 
   * Utilisation de la class MatAutocompleteSelectedEvent afin de récupérer la valeur selectionné dans l'autocomplete de la recherche
   * @param event 
   * @returns 
   */
    onViewTeam(event: MatAutocompleteSelectedEvent){
    let prod = event.option.value;
    // On cherche dans le tableau contenant les équipes, l'objet de l'équipe dont le nom est égale à la valeur selectionnée
    let found = this.teams.find(element => element.name === prod);
    let idTeam = found.id;

    // Si un id est présent
    if(idTeam){
      // override the route reuse strategy / On supp le cache permettant de recharger la page à chaque recherche
      // this.router.routeReuseStrategy.shouldReuseRoute = function () {
      //   return false;
      // }
      // this.router.onSameUrlNavigation = 'reload';
        return this.router.navigate(['/teams', 'view', idTeam]);
      }
    }
}
