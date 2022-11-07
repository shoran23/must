import React, { useState, useEffect } from 'react'
import { 
    AMSynth, 
    DuoSynth, 
    FMSynth,
    MembraneSynth,
    MetalSynth,
    MonoSynth,
    NoiseSynth,
    PluckSynth,
    PolySynth,
    Sampler,
    Synth
} from 'tone'

import Octave from './Octave'

export default function SynthKeyboard() {
    const [instrument, setInstrument] = useState(new Synth().toDestination())
    const [type, setType] = useState('synth')
    const [octaves, setOctaves] = useState([1,2,3,4,5])
    const selectInstrument = (type) => {
        switch(type) {
            case 'amsynth': {setInstrument(new AMSynth().toDestination()); break}
            case 'duosynth': {setInstrument(new DuoSynth().toDestination()); break}
            case 'fmsynth': {setInstrument(new FMSynth().toDestination()); break}
            case 'membranesynth': {setInstrument(new MembraneSynth().toDestination()); break}
            case 'metalsynth': {setInstrument(new MetalSynth().toDestination()); break}
            case 'monosynth': {setInstrument(new MonoSynth().toDestination()); break}
            case 'noisesynth': {setInstrument(new NoiseSynth().toDestination()); break}
            case 'plucksynth': {setInstrument(new PluckSynth().toDestination()); break}
            case 'polysynth': {setInstrument(new PolySynth().toDestination()); break}
            case 'sampler': {setInstrument(new Sampler().toDestination()); break}
            case 'synth': {setInstrument(new Synth().toDestination()); break}
        }
    }
    const handleSelect = e => {
        console.log(e.target.value)
        setType(e.target.value)
        selectInstrument(e.target.value)
    }
    useEffect(() => {
        selectInstrument('synth')
        setType('synth')
    },[])
    return (
        <div className='keyboard'>
            <div className='keyboard-options'>

            </div>
            <div className='keyboard-key-container'>
                {octaves.map((octave, index) => (
                    <Octave 
                        key={`octave-${index}`}
                        octave={octave}
                        length={octaves.length}
                        instrument={instrument}
                    />
                ))}
            </div>
        </div>
    )
}