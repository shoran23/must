import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars,
    faHome,
    faBackward,
    faBackwardFast,
    faPlay,
    faRepeat,
    faBell
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Transport() {
    const controls = useDragControls()

    const buttons = [
        {label: 'Start From Beginning', icon: faBackwardFast, id: useId(), images: null},
        {label: 'Rewind', icon: faBackward, id: useId(), images: null},
        {label: 'Play', icon: faPlay, id: useId(), images: null},
        {label: 'Loop', icon: faRepeat, id: useId(), images: null},
        {label: 'Metronome', icon: faBell, id: useId(), images: null}
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-transport'
            drag
            dragControls={controls}
        >
            <div className='editor-list-header'>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={18}/>
                <FontAwesomeIcon icon={faHome} color='#707070' fontSize={18}/>
            </div>
            {buttons.map((button,index) => (
                <Button
                    key={button.id}
                    index={index}
                    button={button}
                    length={buttons.length}
                />
            ))}
        </motion.div>
    )
}