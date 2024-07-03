import { ApiGame, Game } from "./types";

const TEAM_A = {
    players: [
        {
            id: 'player-1',
            name: 'Lair Júnior'
        },
        {
            id: 'player-2',
            name: 'Fabiano Kalunga'
        },
        {
            id: 'player-3',
            name: 'Wagner Bertoletti'
        },
    ],
}

const TEAM_B = {
    players: [
        {
            id: 'player-4',
            name: 'Lucas Oliveira'
        },
        {
            id: 'player-5',
            name: 'Dani Calabreso'
        },
        {
            id: 'player-6',
            name: 'Boka Loka'
        },
    ],
}

const MOCK_TOURNAMENT = {
    playerStats: [
        {
            id: 'first-stat',
            isDefaultOrder: true,
            title: 'Points'
        },
        {
            id: 'second-stat',
            isDefaultOrder: false,
            title: 'Rebounds'
        },
        {
            id: 'third-stat',
            isDefaultOrder: false,
            title: 'Assists'
        },
    ]
};

export const mapApiGameToEntityGame = (apiGame: ApiGame): Game => {
    console.log('apiGame', apiGame);
    return {
        awayPlaceholder: apiGame.away_placeholder,
        awayScore: apiGame.away_score,
        awayTeam: {
            ...TEAM_A,
            id: apiGame.away_team.id,
            name: apiGame.away_team.name
        },
        datetime: apiGame.datetime,
        homePlaceholde: apiGame.home_placeholde,
        homeScore: apiGame.home_score,
        homeTeam: {
            ...TEAM_B,
            id: apiGame.home_team.id,
            name: apiGame.home_team.name
        },
        id: apiGame.id,
        info: apiGame.info,
        isFinished: apiGame.is_finished,
        location: apiGame.location,
        phaseId: apiGame.phase_id,
        tournament: MOCK_TOURNAMENT,
    }
}