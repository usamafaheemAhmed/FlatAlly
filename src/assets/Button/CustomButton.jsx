import React from 'react'

const CustomButton = (props) => {

    return (
        <button className={`primary1 btn  ${props.extra} `} type={props.type} onClick={props.fun}>
            {props.children}
        </button>
    )
}

export default CustomButton
