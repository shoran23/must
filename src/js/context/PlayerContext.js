import React from 'react'
import { Sampler, Synth } from 'tone'

import { test } from '../TEST_DATA/musicDataStructure'

export const PlayerContext = React.createContext()

class PlayerProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            status: 'stop',
            beat: 0,            // current beat within the player loop
            bpm: 60,            // current beats per minute for the player, will default to the musics bpm but can be changed
            metronome: false,
            music: {},
            synth: new Synth().toDestination(),
            sampler: new Sampler().toDestination(),
            handleState: this.handleState, 
            startFromBeginning: this.startFromBeginning,
            rewind: this.rewind,
            play: this.play,
            stop: this.stop,
            loop: this.loop,
        }
    }

    handleState = (key, value) => {
        this.setState({[key]: value})
    }
    startFromBeginning = () => {
        console.log('player, play from beginning')
    }
    rewind = () => {
        console.log('player, rewind')
    }
    play = () => {
        console.log('player, start')
    }
    stop = () => {
        console.log('player, stop')
    }
    loop = () => {

    }



    render() {

        console.log('music = ',this.state.music)

        console.log('test = ',test)

        return (
            <PlayerContext.Provider value={{...this.state}}>
                {this.props.children}
            </PlayerContext.Provider>
        )
    }
    componentDidMount() {
        if(this.state.music !== test) {
            this.setState({music: test})
        }
    }
}
export default PlayerProvider