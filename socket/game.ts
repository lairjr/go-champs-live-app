import type { Server } from "http";
import WebSocket from "ws";

const initializeGameSocket = (server: Server) => {
  const wss = new WebSocket.Server({ server });

  let game = {
    awayTeam: {
      name: "Lair",
      score: 10,
    },
    homeTeam: {
      name: "Rafa",
      score: 8,
    },
  };

  const sampleLoadGame = (currentGame: any) => ({
    type: "load_game",
    payload: currentGame,
  });

  // Set up event listeners for the WebSocket server
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      const msg = JSON.parse(message.toString());
      console.log(`Received messsage: ${message}`);

      if (msg.type === "load_game") {
        ws.send(JSON.stringify(sampleLoadGame(game)));
      }

      if (msg.type === "inc_away_team_score") {
        game.awayTeam.score = game.awayTeam.score + 1;
        wss.clients.forEach((client) => {
          client.send(JSON.stringify(sampleLoadGame(game)));
        });
      }

      if (msg.type === "inc_home_team_score") {
        game.homeTeam.score = game.homeTeam.score + 1;
        wss.clients.forEach((client) => {
          client.send(JSON.stringify(sampleLoadGame(game)));
        });
      }
    });
  });
};

export default initializeGameSocket;
