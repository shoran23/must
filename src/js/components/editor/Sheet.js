import React, { useState } from 'react'

import Measure from './Measure'

export default function Sheet(props) {
    return (
        <div className='editor-sheet-container' 
            style={{
                scale: `${props.scale}`
            }}
        >
            <div className='editor-sheet'>
                <div className='editor-sheet-header'>
         
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-measure-row'>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                    <Measure/>
                </div>

                <div className='editor-sheet-footer'>
                    <p>Page 1</p>
                </div>
          
            </div>
        </div> 
    )
}