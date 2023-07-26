import { createContext } from "react";

const we = new WebSocket("ws://localhost:3000");
console.log("construindo");
const WsContext = createContext(we);

export default WsContext;
