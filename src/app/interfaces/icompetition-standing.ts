export interface ICompetitionStanding {
    filters?:     Filters;
    competition?: Competition;
    season?:      Season;
    standings?:   Standing[];
}

export interface Competition {
    id?:          number;
    area?:        Area;
    name?:        string;
    code?:        string;
    plan?:        string;
    lastUpdated?: Date;
}

export interface Area {
    id?:   number;
    name?: string;
}

export interface Filters {
}

export interface Season {
    id?:              number;
    startDate?:       Date;
    endDate?:         Date;
    currentMatchday?: number;
    winner?:          null;
}

export interface Standing {
    stage?: string;
    type?:  string;
    group?: null;
    table?: Table[];
}

export interface Table {
    position?:       number;
    team?:           Team;
    playedGames?:    number;
    form?:           null | string;
    won?:            number;
    draw?:           number;
    lost?:           number;
    points?:         number;
    goalsFor?:       number;
    goalsAgainst?:   number;
    goalDifference?: number;
}

export interface Team {
    id?:       number;
    name?:     string;
    crestURL?: string;
}
