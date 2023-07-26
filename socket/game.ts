import type { Server } from "http";
import WebSocket from "ws";

const initializeGameSocket = (server: Server) => {
  const wss = new WebSocket.Server({ server });

  // Set up event listeners for the WebSocket server
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      console.log(`Received messsage: ${message}`);
      ws.send(`Echo: ${message}`);
    });
  });
};

export default initializeGameSocket;
