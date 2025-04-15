import React from 'react'
import Record from './Record'
import "./style.scss"
import Calendar from './Calendar'

function Modal() {
  return (
    <>
        <div className="modal">
            <div className="modal-bg"></div>
            <div className="modal-wrapper">
                <Record />
                {/* <Calendar /> */}
            </div>
        </div>
    </>
  )
}

export default Modal