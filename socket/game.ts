import type { Server } from "http";
import WebSocket from "ws";
import {
  isValidGameMessage,
  mapGameToMessage,
  mapToGameMessage,
} from "./messageMapper";
import reduce, { GameMessage, GameState } from "./gameReducer";

const initializeGameSocket = (server: Server) => {
  const wss = new WebSocket.Server({ server });

  let game: GameState;

  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      console.log(`Received messsage: ${message}`);

      const gameMsg = mapToGameMessage(message);

      if (isValidGameMessage(gameMsg)) {
        game = reduce(game, gameMsg);

        wss.clients.forEach((client) => {
          client.send(mapGameToMessage(game));
        });
      }
    });
  });
};

export default initializeGameSocket;
