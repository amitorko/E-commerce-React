import React from 'react'
import { Announcement } from '../components/Announcement'
import Navbar from '../components/Navbar'

export default function home() {
    return (
        <div className= "container" >
            <Announcement/>
            <Navbar/>
        </div>
    )
}
