import type { Server } from "http";
import WebSocket from "ws";
import { mapToGameMessage } from "./messageMapper";
import handle from "./service";

const initializeGameSocket = (server: Server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    const gameHandler = handle(wss, ws);

    ws.on("message", (message) => {
      console.log(`Received messsage: ${message}`);

      const gameMsg = mapToGameMessage(message);

      gameHandler(gameMsg);
    });
  });
};

export default initializeGameSocket;
