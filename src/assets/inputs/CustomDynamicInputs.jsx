import React from 'react'

const CustomDynamicInputs = (props) => {
    let { type, name, id, Placeholder, extra } = props
    return (
        <input type={type} name={name} id={id} placeholder={Placeholder} className={`form-control customInput ${extra}`} />
    )
}

const CustomDynamicCheck = (props) => {
    let { name, Placeholder, extra, options } = props;

    return (
        options.map((elem, index) => {
            return (
                <div className="form-check custom-checkbox" key={index}>
                    <input
                        type="checkbox"
                        value={elem.values}
                        name={name}
                        id={elem.id}
                        placeholder={Placeholder}
                        className={`form-check-input customInput ${extra}`}
                    />
                    <label className="form-check-label ms-2 mt-1" htmlFor={elem.id}>
                        {elem.title}
                    </label>
                </div>
            )
        })
    );
}

const CustomDynamicRadio = (props) => {
    let { name, Placeholder, extra, options } = props;

    return (
        options.map((elem, index) => {
            return (
                <div className="form-check custom-radio" key={index}>
                    <input
                        type="radio"
                        value={elem.values}
                        name={name}
                        id={elem.id}
                        placeholder={Placeholder}
                        className={`form-check-input customInput ${extra}`}
                    />
                    <label className="form-check-label ms-2 mt-1" htmlFor={elem.id}>
                        {elem.title}
                    </label>
                </div>
            )
        })
    );
}


const CustomDynamicSelect = (props) => {
    let { name, id, options, extra } = props
    return (
        <select name={name} id={id} className={`form-select customInput ${extra}`} >
            {options.map((elem, index) => <option value={elem} key={index}>{elem}</option>)}
        </select>
    )
}



export { CustomDynamicInputs, CustomDynamicSelect, CustomDynamicCheck, CustomDynamicRadio }
