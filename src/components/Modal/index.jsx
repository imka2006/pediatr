import React from 'react'
import Record from './Record'
import "./style.scss"
import Calendar from './Calendar'
import Final from './Final'

function Modal() {
  return (
    <>
        <div className="modal">
            <div className="modal-bg"></div>
            <div className="modal-wrapper">
                {/* <Record /> */}
                {/* <Calendar /> */}
                <Final />
            </div>
        </div>
    </>
  )
}

export default Modal