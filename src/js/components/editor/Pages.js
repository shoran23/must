import React, { useId, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faHome,
    faArrowUp,
    faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import Button from './Button'

export default function Pages(props) {
    const controls = useDragControls()
    const [extendDown, setExtendDown] = useState(false)
    return (
        <motion.div
            className='editor-list'
            id='editor-pages'
            drag
            dragControls={controls}
            style={{
                zIndex: props
            }}
        >
            <div className='editor-list-header'>
                <FontAwesomeIcon icon={faBars} color='#707070' fontSize={18}/>
                <FontAwesomeIcon icon={faHome} color='#707070' fontSize={18}/>

            </div>
        </motion.div>
    )
}