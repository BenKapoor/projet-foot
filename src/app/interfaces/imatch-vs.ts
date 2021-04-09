export interface IMatchVS {
    head2head?: Head2Head;
    match?:     Match;
}

export interface Head2Head {
    numberOfMatches?: number;
    totalGoals?:      number;
    homeTeam?:        Head2HeadHomeTeam;
    awayTeam?:        Head2HeadAwayTeam;
}

export interface Head2HeadHomeTeam {
    id?:     number;
    name?:   string;
    wins?:   number;
    draws?:  number;
    losses?: number;
}

export interface Head2HeadAwayTeam {
    id?:     number;
    name?:   string;
    wins?:   number;
    draws?:  number;
    losses?: number;
}

export interface Match {
    id?:          number;
    competition?: Competition;
    season?:      Season;
    utcDate?:     Date;
    status?:      string;
    venue?:       string;
    matchday?:    null;
    stage?:       string;
    group?:       string;
    lastUpdated?: Date;
    odds?:        Odds;
    score?:       Score;
    homeTeam?:    MatchHomeTeam;
    awayTeam?:    MatchAwayTeam;
    referees?:    Referee[];
}

export interface MatchHomeTeam {
    id?:   number;
    name?: string;
}

export interface MatchAwayTeam {
    id?:   number;
    name?: string;
}

export interface Competition {
    id?:   number;
    name?: string;
    area?: Area;
}

export interface Area {
    name?:      string;
    code?:      string;
    ensignURL?: null;
}

export interface Referee {
    id?:          number;
    name?:        string;
    role?:        string;
    nationality?: string;
}

export interface Odds {
    msg?: string;
}

export interface Score {
    winner?:    string;
    duration?:  string;
    fullTime?:  FullTime;
    halfTime?:  HalfTime;
    extraTime?: ExtraTime;
    penalties?: Penalties;
}

export interface FullTime {
    homeTeam?: number | null;
    awayTeam?: number | null;
}

export interface HalfTime {
    homeTeam?: number | null;
    awayTeam?: number | null;
}

export interface ExtraTime {
    homeTeam?: number | null;
    awayTeam?: number | null;
}

export interface Penalties {
    homeTeam?: number | null;
    awayTeam?: number | null;
}

export interface Season {
    id?:              number;
    startDate?:       Date;
    endDate?:         Date;
    currentMatchday?: number;
    winner?:          null;
}
