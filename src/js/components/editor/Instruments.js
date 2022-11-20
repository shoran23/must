import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGuitar,
    faBars,
    faHome,
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Instruments() {
    const controls = useDragControls()

    const buttons = [
        {label: 'Guitar', icon: faGuitar, id: useId(), images: null}
    ]

    return (
        <motion.div
            className='editor-list'
            id='editor-instuments'
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