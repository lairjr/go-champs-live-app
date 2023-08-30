import { RawData } from "ws";
import { NoAction, REGISTRY_ACTIONS } from "./gameReducer";
import { GameMessage, GameState } from "@/types";

export const mapToGameMessage = (message: RawData) => {
  try {
    const msg = JSON.parse(message.toString());
    return msg as GameMessage;
  } catch {
    return NoAction;
  }
};

export const isValidGameMessage = (message: GameMessage) =>
  !!REGISTRY_ACTIONS[message.type];

export const mapGameToMessage = (game: GameState) =>
  JSON.stringify({
    type: "update_game",
    payload: game,
  });
