export interface ICompetitionSubResource {
    count?:       number;
    filters?:     Filters;
    competition?: Competition;
    matches?:     Match[];
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

export interface Match {
    id?:          number;
    season?:      Season;
    utcDate?:     Date;
    status?:      Status;
    matchday?:    number | null;
    stage?:       Stage;
    group?:       null | string;
    lastUpdated?: Date;
    odds?:        Odds;
    score?:       Score;
    homeTeam?:    Area;
    awayTeam?:    Area;
    referees?:    Referee[];
}

export interface Odds {
    msg?: Msg;
}

export enum Msg {
    ActivateOddsPackageInUserPanelToRetrieveOdds = "Activate Odds-Package in User-Panel to retrieve odds.",
}

export interface Referee {
    id?:          number;
    name?:        string;
    role?:        Role;
    nationality?: Nationality | null;
}

export enum Nationality {
    Belarus = "Belarus",
    Belgium = "Belgium",
    Bulgaria = "Bulgaria",
    CzechRepublic = "Czech Republic",
    England = "England",
    France = "France",
    Germany = "Germany",
    Greece = "Greece",
    Israel = "Israel",
    Italy = "Italy",
    Latvia = "Latvia",
    Lithuania = "Lithuania",
    Netherlands = "Netherlands",
    Poland = "Poland",
    Portugal = "Portugal",
    Romania = "Romania",
    Russia = "Russia",
    Scotland = "Scotland",
    Serbia = "Serbia",
    Slovakia = "Slovakia",
    Slovenia = "Slovenia",
    Spain = "Spain",
    Sweden = "Sweden",
    Switzerland = "Switzerland",
    Turkey = "Turkey",
}

export enum Role {
    AdditionalAssistantN1 = "ADDITIONAL_ASSISTANT_N1",
    AdditionalAssistantN2 = "ADDITIONAL_ASSISTANT_N2",
    AssistantN1 = "ASSISTANT_N1",
    AssistantN2 = "ASSISTANT_N2",
    FourthOfficial = "FOURTH_OFFICIAL",
    MainReferee = "MAIN_REFEREE",
    Ref = "REF",
    VideoAssistantReferee = "VIDEO_ASSISTANT_REFEREE",
}

export interface Score {
    winner?:    Winner | null;
    duration?:  Duration;
    fullTime?:  ExtraTime;
    halfTime?:  ExtraTime;
    extraTime?: ExtraTime;
    penalties?: ExtraTime;
}

export enum Duration {
    ExtraTime = "EXTRA_TIME",
    PenaltyShootout = "PENALTY_SHOOTOUT",
    Regular = "REGULAR",
}

export interface ExtraTime {
    homeTeam?: number | null;
    awayTeam?: number | null;
}

export enum Winner {
    AwayTeam = "AWAY_TEAM",
    Draw = "DRAW",
    HomeTeam = "HOME_TEAM",
}

export interface Season {
    id?:              number;
    startDate?:       Date;
    endDate?:         Date;
    currentMatchday?: number;
}

export enum Stage {
    GroupStage = "GROUP_STAGE",
    PlayOffRound = "PLAY_OFF_ROUND",
    PreliminaryFinal = "PRELIMINARY_FINAL",
    PreliminarySemiFinals = "PRELIMINARY_SEMI_FINALS",
    QuarterFinals = "QUARTER_FINALS",
    RoundOf16 = "ROUND_OF_16",
    The1StQualifyingRound = "1ST_QUALIFYING_ROUND",
    The2NdQualifyingRound = "2ND_QUALIFYING_ROUND",
    The3RDQualifyingRound = "3RD_QUALIFYING_ROUND",
}

export enum Status {
    Awarded = "AWARDED",
    Finished = "FINISHED",
    Scheduled = "SCHEDULED",
}