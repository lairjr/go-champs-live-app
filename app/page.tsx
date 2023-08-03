import Controls from "./components/Controls";
import Score from "./components/Score";

export default function Home() {
  return (
    <main>
      <h1>Game View</h1>

      <Controls />

      <Score type="home" />

      <hr />
      <Score type="away" />
    </main>
  );
}
