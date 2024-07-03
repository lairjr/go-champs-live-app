export type ApiGame = {
    away_placeholder?: string;
    away_score: number;
    away_team: {
        id: string;
        name: string;
    };
    datetime: string;
    home_placeholde?: string;
    home_score: number;
    home_team: {
        id: string;
        name: string;
    };
    id: string;
    info: string;
    is_finished: boolean;
    location: string;
    phase_id: string;
}

export type Player = {
    id: string;
    name: string;
}

export type PlayerStat = {
    id: string;
    isDefaultOrder?: boolean;
    title: string;
}

export type TeamHeader = {
    id: string;
    name: string;
    players: Player[];
}

export type Tournament = {
    playerStats: PlayerStat[];
}

export type Game = {
    awayPlaceholder?: string;
    awayScore: number;
    awayTeam: TeamHeader;
    datetime: string;
    homePlaceholde?: string;
    homeScore: number;
    homeTeam: TeamHeader;
    id: string;
    info: string;
    isFinished: boolean;
    location: string;
    phaseId: string;
    tournament: Tournament;
}
