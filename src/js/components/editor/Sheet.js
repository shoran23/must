import React, { useState } from 'react'

import Measure from './Measure'
import MeasureNew from './MeasureNew'

export default function Sheet(props) {

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

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                    <MeasureNew/>
                    <div className='editor-sheet-measure-divider'/>
                </div>

                <div className='editor-sheet-footer'>
                    <p>Page 1</p>
                </div>
          
            </div>
        </div> 
    )
}