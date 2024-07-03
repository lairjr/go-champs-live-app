import { ApiGame, Game } from "./types"

export const mapApiGameToEntityGame = (apiGame: ApiGame): Game => {
    console.log('apiGame', apiGame);
    return {
        awayPlaceholder: apiGame.away_placeholder,
        awayScore: apiGame.away_score,
        awayTeam: {
            id: apiGame.away_team.id,
            name: apiGame.away_team.name
        },
        datetime: apiGame.datetime,
        homePlaceholde: apiGame.home_placeholde,
        homeScore: apiGame.home_score,
        homeTeam: {
            id: apiGame.home_team.id,
            name: apiGame.home_team.name
        },
        id: apiGame.id,
        info: apiGame.info,
        isFinished: apiGame.is_finished,
        location: apiGame.location,
        phaseId: apiGame.phase_id,
    }
}