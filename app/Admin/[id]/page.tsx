import { getGame } from "@/app/game/data";
import GeneralBoard from "@/app/components/GeneralBoard";

export default async function Admin({ params }: { params: { id: string } }) {
    const { id } = params;
    const game = await getGame(id);

    return (
        <main>
            <GeneralBoard />
        </main>
    );
}