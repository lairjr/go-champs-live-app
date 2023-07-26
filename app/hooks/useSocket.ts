import { useContext } from "react";
import WsContext from "../providers/wscontext";

const useSocket = () => {
  const socket = useContext(WsContext);

  const sendMsg = (data: string) => {
    socket.send(data);
  };

  return [sendMsg];
};

export default useSocket;
