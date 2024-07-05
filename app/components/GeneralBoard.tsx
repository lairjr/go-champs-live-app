'use client';

import { Team } from "@/types";
import useSocket from "../hooks/useSocket";

type TeamScoreProps = {
    team: Team;
    onIncrement: () => void;
    onDecrement: () => void;
}

function TeamScore({ team, onIncrement, onDecrement }: TeamScoreProps) {
    return (
        <div className="columns is-multiline">
            <div className="column is-full has-text-centered">
                <span className="is-size-3">{team.name}</span>
            </div>
            <div className="column is-full">
                <div className="columns">
                    <div className="column is-4 has-text-right">
                        <button className="button is-medium is-success" onClick={onIncrement}>+</button>
                    </div>
                    <div className="column is-4 has-text-centered">
                        <span className="is-size-3">{team.score}</span>
                    </div>
                    <div className="column is-4 has-text-left">
                        <button className="button is-medium is-secondary" onClick={onDecrement}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Period() {
    return (
        <div className="columns is-multiline">
            <div className="column is-full has-text-centered">
                <span className="is-size-3">Period</span>
            </div>
            <div className="column is-full">
                <div className="columns is-multiline">
                    <div className="column is-12 has-text-centered">
                        <button className="button is-medium is-success">+</button>
                    </div>
                    <div className="column is-12 has-text-centered">
                        <span className="is-size-3">1</span>
                    </div>
                    <div className="column is-12 has-text-centered">
                        <button className="button is-medium is-secondary">-</button>
                    </div>
                    <div className="column is-12 has-text-centered">
                        <button className="button is-medium is-secondary">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

type Props = {
    period?: number;
}

export default function GeneralBoard({ period = 0 }: Props) {
    const [gameState, { initGame, incTeamAwayScore, incTeamHomeScore }] = useSocket();

    return (
        <div className="columns is-multiline">
            <div className="column is-full">
                <div className="columns">
                    <div className="column is-half">
                        <h2 className="title is-2">General Board</h2>
                    </div>
                    <div className="column is-half has-text-right">
                        <p className="buttons is-justify-content-flex-end">
                            <button className="button is-medium" onClick={initGame}>
                                <span className="icon">
                                    <i className="fas fa-play">{'>'}</i>
                                </span>
                                <span>Start/Continue</span>
                            </button>

                            <button className="button is-medium">
                                <span className="icon">
                                    <i className="fas fa-pause">{'||'}</i>
                                </span>
                                <span>Pause</span>
                            </button>

                            <button className="button is-medium">
                                <span className="icon">
                                    <i className="fas fa-stop">{'~'}</i>
                                </span>
                                <span>End</span>
                            </button>    
                        </p>
                    </div>
                </div>
            </div>
            <div className="column is-full">
                <div className="columns">
                    <div className="column is-5">
                        <TeamScore
                            team={gameState.awayTeam}
                            onIncrement={incTeamAwayScore}
                            onDecrement={() => console.log('Decrement Away Team Score')}
                        />
                    </div>
                    <div className="column is-2">
                        <Period />
                    </div>
                    <div className="column is-5">
                        <TeamScore
                            team={gameState.homeTeam}
                            onIncrement={incTeamHomeScore}
                            onDecrement={() => console.log('Decrement Home Team Score')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}