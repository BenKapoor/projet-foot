export interface IListteam {
    count?:   number;
    filters?: Filters;
    teams?:   Team[];
}

export interface Filters {
    areas?:      number[];
    permission?: string;
}

export interface Team {
    id?:          number;
    area?:        Area;
    name?:        string;
    shortName?:   string;
    tla?:         string;
    crestURL?:    string;
    address?:     string;
    phone?:       null | string;
    website?:     string;
    email?:       null | string;
    founded?:     number | null;
    clubColors?:  string;
    venue?:       string;
    lastUpdated?: Date;
}

export interface Area {
    id?:   number;
    name?: Name;
}

export enum Name {
    England = "England",
}