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
        {label: 'Zoom In', icon: faMagnifyingGlassPlus, id: useId(), images: null, function: props.scaleUp},
        {label: 'Zoom Out', icon: faMagnifyingGlassMinus, id: useId(), images: null, function: props.scaleDown},
        {label: 'Save', icon: faFloppyDisk, id: useId(), images: null},
        {label: 'New', icon: faFile, id: useId(), images: null},
        {label: 'Print', icon: faPrint, id: useId(), images: null},
        {label: 'Undo', icon: faRotateLeft, id: useId(), images: null},
        {label: 'Redo', icon: faRotateRight, id: useId(), images: null}
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