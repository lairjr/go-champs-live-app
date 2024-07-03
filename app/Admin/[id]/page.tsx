import { getGame } from "@/app/game/data";

export default async function Admin({ params }: { params: { id: string } }) {
    const { id } = params;
    const game = await getGame(id);

    return (
        <main>
            <h1>Live game {id}</h1>
            <p>Home team: {game.homeTeam.name}</p>
        </main>
    );
}