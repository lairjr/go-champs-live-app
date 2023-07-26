import { createContext } from "react";

const we = new WebSocket("ws://localhost:3000");
const WsContext = createContext(we);

export default WsContext;
