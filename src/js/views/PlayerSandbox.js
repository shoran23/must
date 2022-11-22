import React, { useState, useEffect } from 'react'

let loopTimeout = null

export default function PlayerSandbox() {
    const [count, setCount] = useState()
    const loop = () => {
        loopTimeout = setTimeout(() => {
            props.setCount(props.count + 1)
            console.log('loop interval')
            loop()
        },1000)
    }

    return (
        <div>
            <button onClick={loop}>Start</button>
            <h1>{props.count}</h1>
        </div>
    )
}





