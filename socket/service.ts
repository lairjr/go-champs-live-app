import { WebSocketServer, WebSocket } from "ws";
import reduce, { GameMessage, GameState, INITIAL_STATE } from "./gameReducer";
import { isValidGameMessage, mapGameToMessage } from "./messageMapper";

let game: GameState = INITIAL_STATE;

const handle = (wss: WebSocketServer, ws: WebSocket) => (msg: GameMessage) => {
  if (isValidGameMessage(msg)) {
    game = reduce(game, msg);

    if (msg.type === "load_game") {
      ws.send(mapGameToMessage(game));
    } else {
      wss.clients.forEach((client) => {
        client.send(mapGameToMessage(game));
      });
    }
  }
};

export default handle;
