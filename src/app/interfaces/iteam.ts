export interface ITeam {
    id:                 number;
    area:               Area;
    activeCompetitions: ActiveCompetition[];
    name:               string;
    shortName:          string;
    tla:                string;
    crestUrl:           string;
    address:            string;
    phone:              string;
    website:            string;
    email:              string;
    founded:            number;
    clubColors:         string;
    venue:              string;
    squad:              Squad[];
    lastUpdated:        Date;
}

export interface ActiveCompetition {
    id:          number;
    area:        Area;
    name:        string;
    code:        string;
    plan:        string;
    lastUpdated: Date;
}

export interface Area {
    id:   number;
    name: string;
}

export interface Squad {
    id:             number;
    name:           string;
    position:       Position | null;
    dateOfBirth:    Date;
    countryOfBirth: string;
    nationality:    string;
    shirtNumber:    null;
    role:           Role;
}

export enum Position {
    Attacker = "Attacker",
    Defender = "Defender",
    Goalkeeper = "Goalkeeper",
    Midfielder = "Midfielder",
    PositionMIDFIELDER = "MIDFIELDER",
}

export enum Role {
    AssistantCoach = "ASSISTANT_COACH",
    Coach = "COACH",
    Player = "PLAYER",
}