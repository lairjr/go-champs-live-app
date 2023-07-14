import Score from "./components/Score";

export default function Home() {
  return (
    <main>
      <h1>Game View</h1>

      <Score teamName="Golden State Warriors" />

      <Score teamName="Lair" />
    </main>
  )
}
