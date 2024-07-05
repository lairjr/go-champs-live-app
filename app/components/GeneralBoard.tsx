function TeamScore() {
    return (
        <div className="columns is-multiline">
            <div className="column is-full has-text-centered">
                <span className="is-size-3">Team name</span>
            </div>
            <div className="column is-full">
                <div className="columns">
                    <div className="column is-4 has-text-right">
                        <button className="button is-medium is-success">+</button>
                    </div>
                    <div className="column is-4 has-text-centered	">
                        <span className="is-size-3">10</span>
                    </div>
                    <div className="column is-4 has-text-left">
                        <button className="button is-medium is-secondary">-</button>
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

export default function GeneralBoard() {
    return (
        <div className="columns is-multiline">
            <div className="column is-full">
                <div className="columns">
                    <div className="column is-half">
                        <h2 className="title is-2">General Board</h2>
                    </div>
                    <div className="column is-half has-text-right">
                        <p className="buttons">
                            <button className="button is-medium">
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
                        <TeamScore />
                    </div>
                    <div className="column is-2">
                        <Period />
                    </div>
                    <div className="column is-5">
                        <TeamScore />
                    </div>
                </div>
            </div>
        </div>
    )
}