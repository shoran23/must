import React from 'react'
import { Sampler, Synth, Sequence, Transport, Part } from 'tone'

import { test } from '../TEST_DATA/musicDataStructure'

export const PlayerContext = React.createContext()

const synth = new Synth().toDestination()

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

            loopTest: this.loopTest,
            createSequence: this.createSequence,
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
        // create a sequence which can be played,
        // the sequence will created from the current music data structure
        // the returned time variable can be stored in state/variable and accessed when resuming the piece of music
        // look into using the transport for start and stopping controls
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


    loopTest = () => {
        const synth = new Synth().toDestination();
        const seq = new Sequence((time, note) => {
            synth.triggerAttackRelease(note, 0.1, time);
            // subdivisions are given as subarrays
        }, [["C4"], ['D4', ["D4", "E4"]], ["G4"], ["A4", "G4"]]).start(0);
        seq.loop = false
        Transport.start();
    } 

    createSequence = () => {
        let musicSequence = []
        for(const measure of this.state.music.measures) {
            console.log(measure)
            for(const beat of measure.beats) {
                musicSequence.push(beat)
            }
        }

        console.log('musicSequence = ',musicSequence)

        const synth = new Synth().toDestination();
        const seq = new Sequence((time, note) => {
            synth.triggerAttackRelease(note, 0.1, time)
        }, musicSequence).start(0)
        seq.loop = false
        Transport.start()
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