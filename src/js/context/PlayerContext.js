import React from 'react'
import { Synth } from 'tone'

const PlayerContext = React.createContext()

class PlayerProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            bpm: 60,
            beat: 0,        // current beat within the player loop
            music: {},
            synth: new Synth().toDestination(),
        }
    }

    handleState = (key, value) => {
        this.setState({[key]: value})
    }

    start = () => {
        // this will start the player loop with the provided music
    }

    stop = () => {
        // this will stop the player loop with the provided music
        // will reset the beat back to 0
    }

    pause = () => {
        // this will stop the player loop with the provided music
        // will not reset the beat to 0
    }

    render() {
        return (
            <PlayerContext.Provider value={{...this.state}}>
                {this.props.children}
            </PlayerContext.Provider>
        )
    }
}
export default PlayerProvider