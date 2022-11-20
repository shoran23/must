import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Clefs() {
    const controls = useDragControls()
    const startDrag = e => {
        controls.start(e)
    }

    const buttons = [
        {label: 'Treble', icon: null, id: useId(), images: {inactive: require('../../../images/clefs/Treble_White.png').default, active: require('../../../images/clefs/Treble_Blue.png').default}},
        {label: 'Tenor', icon: null, id: useId(), images: {inactive: require('../../../images/clefs/Tenor_White.png').default, active: require('../../../images/clefs/Tenor_Blue.png').default}},
        {label: 'Bass', icon: null, id: useId(), images: {inactive: require('../../../images/clefs/Bass_White.png').default, active: require('../../../images/clefs/Bass_Blue.png').default}},
        {label: 'Alto', icon: null, id: useId(), images: {inactive: require('../../../images/clefs/Alto_White.png').default, active: require('../../../images/clefs/Alto_Blue.png').default}}
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-clefs'
            drag
            dragControls={controls}
        >
            <div className='editor-list-header' onPointerDown={startDrag}> 
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={24}/>
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