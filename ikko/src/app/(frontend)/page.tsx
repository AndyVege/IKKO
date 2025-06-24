import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function Home(){

    return(
        <div className="bg-white rounded-2xl p-50 m-5 text-black font-mono">
            <div className="">
                <h1 className='text-2xl'>Velkommen til ikko!</h1>
                <h3 className='text-xl'>Her kan du kjøpe strikke-ting</h3>
            </div>
        </div>
    )
}