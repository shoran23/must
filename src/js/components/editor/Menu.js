import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faMagnifyingGlassPlus,
    faMagnifyingGlassMinus,
    faFloppyDisk,
    faFile,
    faPrint,
    faRotateLeft,
    faRotateRight
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Menu(props) {
    const controls = useDragControls()

    const startDrag = e => {
        controls.start(e)
    }

    const buttons = [
        {label: 'Zoom In', icon: faMagnifyingGlassPlus, id: useId(), function: props.scaleUp},
        {label: 'Zoom Out', icon: faMagnifyingGlassMinus, id: useId(), function: props.scaleDown},
        {label: 'Save', icon: faFloppyDisk, id: useId()},
        {label: 'New', icon: faFile, id: useId()},
        {label: 'Print', icon: faPrint, id: useId()},
        {label: 'Undo', icon: faRotateLeft, id: useId()},
        {label: 'Redo', icon: faRotateRight, id: useId()}
    ]

    return (
        <motion.div 
            className="editor-list" 
            id='editor-menu'
            drag 
            dragControls={controls}
        > 
            <div className='editor-list-header'  onPointerDown={startDrag}>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={24}/>
            </div>
            {buttons.map(button => (
                <Button
                    key={button.id}
                    button={button}
                />
            ))}
        </motion.div>
    )
}