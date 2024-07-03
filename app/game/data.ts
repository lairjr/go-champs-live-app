import Core from "../clients/core"
import { mapApiGameToEntityGame } from "./mappers";
import { ApiGame } from "./types";

export const getGame = async (gameId: string) => {
    try {
        const path = `v1/games/${gameId}`;
        const response = await Core.getSingle<ApiGame>(path);
        return mapApiGameToEntityGame(response.data);
    } catch (error) {
        console.error("Failed to fetch game data", error);
        throw error;
    }
}
