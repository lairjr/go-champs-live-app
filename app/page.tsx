export default function Home() {
  const scoreRafa = 12;
  const scoreLair = 8;

  return (
    <main>
      <h1>Game View</h1>

      <div>
        <span>Time Rafa:</span>
        <span>{scoreRafa}</span>
        <button>Up</button>
      </div>

      <div>
        <span>Time Lair:</span>
        <span>{scoreLair}</span>
        <button>Up</button>
      </div>
    </main>
  )
}
