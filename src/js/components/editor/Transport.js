import React, { useId, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars,
    faHome,
    faArrowUp,
    faArrowDown,
    faBackward,
    faBackwardFast,
    faPlay,
    faStop,
    faRepeat,
    faBell
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

import { PlayerContext } from '../../context/PlayerContext'

export default function Transport(props) {
    const controls = useDragControls()
    const [extendDown, setExtendDown] = useState(false)
    const playerContext = useContext(PlayerContext)

    const buttons = [
        {label: 'Start From Beginning', icon: faBackwardFast, id: useId(), images: null, press: playerContext.startFromBeginning, active: null},
        {label: 'Rewind', icon: faBackward, id: useId(), images: null, press: playerContext.rewind, active: null},
        {label: 'Play', icon: faPlay, id: useId(), images: null, press: playerContext.createSequence, active: {state: 'status', value: 'play'}},
        {label: 'Stop', icon: faStop, id: useId(), images: null, press: playerContext.stop, active: {state:  'status', value: 'stop'}},
        {label: 'Loop', icon: faRepeat, id: useId(), images: null, press: playerContext.toggleLoop, active: {state: 'loopEnable', value: true}},
        {label: 'Metronome', icon: faBell, id: useId(), images: null, press: playerContext.toggleMetronome, active: {state: 'metronomeEnable', value: true}}
    ]

    console.log('playerContext.status = ',playerContext.status)

    return (
        <motion.div
            className='editor-list'
            id='editor-transport'
            drag
            dragControls={controls}
            style={{
                zIndex: props.menuZIndexes[props.menuIndex]
            }}
            onPointerDown={() => props.updateMenuZIndexes(props.menuIndex)}
        >
            <div className='editor-list-header'>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={18}/>
                <FontAwesomeIcon icon={faHome} color='#707070' fontSize={18}/>
                {extendDown ?
                    <FontAwesomeIcon icon={faArrowUp} color='#707070' fontSize={18} onClick={() => setExtendDown(false)}/>
                :
                    <FontAwesomeIcon icon={faArrowDown} color='#707070' fontSize={18} onClick={() => setExtendDown(true)}/>
                }
            </div>
            {extendDown ?
            <React.Fragment>
                {buttons.map((button,index) => (
                    <Button
                        key={button.id}
                        index={index}
                        button={button}
                        length={buttons.length}
                        context={playerContext}
                    />
                ))}            
            </React.Fragment>
            :
                <p className='editor-list-label'>Transport</p>
            }

        </motion.div>
    )
}