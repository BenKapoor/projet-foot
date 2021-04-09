export interface ICompetition {
    count?:        number;
    competitions?: Competition[];
}

export interface Competition {
    id?:                       number;
    area?:                     Area;
    name?:                     string;
    code?:                     null | string;
    emblemUrl?:                null | string;
    plan?:                     Plan;
    currentSeason?:            CurrentSeason | null;
    seasons?:                  Season[];
    numberOfAvailableSeasons?: number;
    lastUpdated?:              Date;
}

export interface Area {
    id?:          number;
    name?:        string;
    countryCode?: string;
    ensignURL?:   null | string;
}

export interface CurrentSeason {
    id?:              number;
    startDate?:       Date;
    endDate?:         Date;
    currentMatchday?: number | null;
    winner?:          Winner | null;
}

export interface Season {
    id?:              number;
    startDate?:       Date;
    endDate?:         Date;
    currentMatchday?: number | null;
    winner?:          Winner | null;
}

export interface Winner {
    id?:        number;
    name?:      string;
    shortName?: null | string;
    tla?:       null | string;
    crestURL?:  null | string;
}

export enum Plan {
    TierFour = "TIER_FOUR",
    TierOne = "TIER_ONE",
    TierThree = "TIER_THREE",
    TierTwo = "TIER_TWO",
}