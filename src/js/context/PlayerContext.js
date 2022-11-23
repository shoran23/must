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
            loopEnable: false,
            metronomeEnable: false,
            handleState: this.handleState, 
            startFromBeginning: this.startFromBeginning,
            rewind: this.rewind,
            play: this.play,
            stop: this.stop,
            toggleLoop: this.toggleLoop,
            toggleMetronome: this.toggleMetronome,
        }
    }

    handleState = (key, value) => {
        this.setState({[key]: value})
    }

    playNote = (note,index) => {
        setTimeout(() => {
            this.state.synth.triggerAttackRelease(note.note, note.duration)
        },1000 * index)
    }


    startFromBeginning = () => {
        console.log('player, play from beginning')
    }
    rewind = () => {
        console.log('player, rewind')
    }
    play = () => {
        console.log('player, start')
        this.setState({status: 'play'})
        for(const measure of this.state.music.measures) {
            for(const [beatIndex,beat] of measure.beats.entries()) {
                for(const note of beat.notes) {           
                    this.playNote(note,beatIndex)
                }
            }
        }
    }
    stop = () => {
        console.log('player, stop')
        this.setState({status: 'stop'})
    }
    toggleLoop = () => {
        this.setState({loopEnable: !this.state.loopEnable})
    }
    toggleMetronome = () => {
        this.setState({metronomeEnable: !this.state.metronomeEnable})
    }



    render() {
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