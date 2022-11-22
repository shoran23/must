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
                {extendDown ?
                    <FontAwesomeIcon icon={faArrowUp} color='#707070' fontSize={18}/>
                :
                    <FontAwesomeIcon icon={faArrowDown} color='#707070' fontSize={18}/>
                }
            </div>
            {extendDown ?
                <React.Fragment>   
                    {buttons.map((button,index) => {
                        <Button
                            key={button.id}
                            index={index}
                            button={button}
                            length={butons.length}
                            context={null}
                        />
                    })}
                </React.Fragment>
            :
                <p className='editor-list-label'>Pages</p>        
            }
        </motion.div>
    )
}