import React, { useContext } from 'react'

import Measure from './Measure'

import { PlayerContext } from '../../context/PlayerContext'

export default function Sheet(props) {
    const playerContext = useContext(PlayerContext)
    const handleText = e => {
        if(e.target.name === 'composer') {
            props.setComposer(e.target.value)
        } else if(e.target.name === 'title') {
            props.setTitle(e.target.value)
        }
    }
    
    return (
        <div className='editor-sheet-container'
            style={{
                scale: `${props.scale}`
            }}
        >
            <div className='editor-sheet'>
                <form className='editor-sheet-header'>
                    <input
                        className='editor-sheet-input author'
                        type='text'
                        name='composer'
                        value={props.composer}
                        onChange={handleText}
                    />
                    <input
                        className='editor-sheet-input title'
                        type='text'
                        name='title'
                        value={props.title}
                        onChange={handleText}
                    />
                </form>

                <div className='editor-sheet-measure-container'>
                    {playerContext.music.measures.map((measure,index)=> (
                        <Measure 
                            key={`editor-sheet-music-measure-${measure}`}
                            index={index}
                            measure={measure}
                        />
                    ))}
                </div>
                
                <div className='editor-sheet-footer'>
                    <p>Page 1</p>
                </div>
          
            </div>
        </div> 
    )
}