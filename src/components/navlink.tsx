import Link from 'next/link'
import React from 'react'


const Navlink = () => {
    return (
        <div>
            <Link href='/' >Home</Link>
            <Link href='./performance' >Performance</Link>
            <Link href='./reliablity' >Reliablity</Link>
            <Link href='./scale' >Scale</Link>
        </div>
    )
}

export default Navlink