"use client";

import useSocket from "../hooks/useSocket";

const Controls = () => {
  const [game, { initGame }] = useSocket();
  return (
    <nav>
      <button onClick={initGame}>Start game</button>
    </nav>
  );
};

export default Controls;
