import React from 'react'
import Nev from '../navigation/Nev'
import Footer from '../navigation/Footer'

const Default = (props) => {
    return (
        <div>
            <Nev />

            {props.children}

            <Footer />
        </div>
    )
}

export default Default
