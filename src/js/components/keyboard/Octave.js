import React from 'react'

import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'

import { octave } from '../../constants/notes'

import '../../../scss/components/keyboard.scss'

export default function Octave(props) {
    return (
        <React.Fragment>
            {props.length !== undefined ?
                <div className='keyboard-octave' style={{width: `${100 / props.length}%`}}>
                    {octave.map((note,index) => (   
                        <React.Fragment key={`fragment-${index}`}>
                            {note.search('#') > -1 ?
                                <BlackKey
                                    key={`black-key-${index}`}
                                    index={index}
                                    note={`${note}${props.octave}`}
                                    instrument={props.instrument}
                                />
                            :
                                <WhiteKey
                                    key={`white-key-${index}`}
                                    note={`${note}${props.octave}`}
                                    instrument={props.instrument}
                                />
                            }
                        </React.Fragment>
                    ))}
                </div>
            :
                <React.Fragment/>
            } 
        </React.Fragment>
    )
}