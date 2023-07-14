'use client'

import { useState } from "react";

interface Props {
    teamName: string;
}

export default function Score({ teamName }: Props) {
    const [scoreRafa, setScoreRafa] = useState(0)
    
    return (
        <div>
            <span>Time {teamName}:</span>
            <span>{scoreRafa}</span>
            {'    '}
            <button onClick={() => setScoreRafa(scoreRafa + 1)}>Up</button>
        </div>
    )
}