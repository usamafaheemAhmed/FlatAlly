import React from 'react'

const CustomButton = (props) => {
    let { extra, type, fun, text } = props;

    return (
        <button className={`primary btn w-100  ${extra} `} type={type} onClick={fun}>
            {text}
        </button>
    )
}
const CustomButtonOutline = (props) => {
    let { extra, type, fun, text } = props;

    return (
        <button className={`primaryOutline btn w-100  ${extra} `} type={type} onClick={fun}>
            {text}
        </button>
    )
}

const CustomButtonLink = (props) => {
    let { extra, type, href, text } = props;

    return (
        <a className={`primaryLink btn w-100  ${extra} `} type={type} href={href} target='_blank' >
            {text}
        </a>
    )
}

const CustomButtonBigButton = (props) => {
    let { extra, type, fun, text } = props;
    let PropHeight = props.height || '';
    return (
        <button className={`primary BigBtn btn w-100  ${extra} `} type={type} onClick={fun} style={{ minHeight: "4rem", height: PropHeight }}>
            {text}
        </button>
    )
}

const CustomButtonBigCircleView = (props) => {
    let { extra, type, fun, text, icon } = props;

    return (
        <button className={`primaryCircleView btn  ${extra} `} type={type} onClick={fun}>
            {text}
        </button>
    )
}

const CustomButtonBigCircleOutline = (props) => {
    let { extra, type, fun, text, icon } = props;

    return (
        <button className={`primaryCircleView btn  ${extra} `} type={type} onClick={fun}>
            {text}
        </button>
    )
}

export { CustomButton, CustomButtonOutline, CustomButtonBigButton, CustomButtonLink, CustomButtonBigCircleView, CustomButtonBigCircleOutline };


