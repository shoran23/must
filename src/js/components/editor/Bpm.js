import React, { useId, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faArrowUp,
    faArrowDown,
    faCaretUp,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { motion, useDragControls } from 'framer-motion'

import { PlayerContext } from '../../context/PlayerContext'
 
export default function Bpm(props) {
    const controls = useDragControls()
    const [extendDown, setExtendDown] = useState(false)
    const playerContext = useContext(PlayerContext)

    const handleBpm = bpm => {
        playerContext.handleState('bpm',bpm)
    }

    const handleChangeBpm = e => {
        handleBpm(e.target.value)
    }

    return (
        <motion.div
            className='editor-list'
            id='editor-bpm'
            drag
            dragControls={controls}
            style={{
                zIndex: props.menuZIndexes[props.menuIndex]
            }}
            onPointerDown={() => props.updateMenuZIndexes(props.menuIndex)}
        >    
            <div className='editor-list-header'>
                <FontAwesomeIcon icon={faHome} color='#707070' fontSize={18}/>
                {extendDown ?
                    <FontAwesomeIcon icon={faArrowUp} color='#707070' fontSize={18} onClick={() => setExtendDown(false)}/>
                :
                    <FontAwesomeIcon icon={faArrowDown} color='#707070'fontSize={18} onClick={() => setExtendDown(true)}/>
                }
            </div>
            {extendDown ?
                <form id='editor-bpm-form'>
                    <input
                        type='number'
                        id='editor-bpm-input'
                        value={playerContext.bpm}
                        onChange={handleChangeBpm}
                    />
                    <p id='editor-bpm-input-units'>(BPM)</p>
                </form>
            :
                <p className='editor-list-label'>Tempo</p>
            }
        </motion.div>
    )
}