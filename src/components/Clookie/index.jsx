import React, { useState } from 'react'
import Lil from './Lil'
import Full from './Full'

import "./style.scss"

function Cookie() {
    const [active, seetActive] = useState(true)
  return (
    <>
    {
        active ? (
            <Full />
        ): (
            <Lil />
        )
    }
    </>
  )
}

export default Cookie