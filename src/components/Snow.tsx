'use client'

import React from 'react'
import Snowfall from 'react-snowfall'

export default function Snow() {
    return <div className='h-dvh w-dwh fixed top-0 left-0 pointer-events-none z-50'>
        <Snowfall />
    </div>
}