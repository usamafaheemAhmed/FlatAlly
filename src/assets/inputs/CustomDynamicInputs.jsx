import React from 'react'
import { Formik, Form, useField, useFormikContext, Field } from 'formik';
import { Input, Select } from 'antd';
import { InputGroup } from 'react-bootstrap';


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



const FormikInput = ({ type, label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    // console.log(field);
    return (
        <div>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <Input {...field} {...props} type={type} />
            {hasError && <div className="error">{meta.error}</div>}
        </div>
    );
};


const FormikSelect = ({ label, options, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const hasError = meta.touched && meta.error;

    const handleChange = (value) => {
        helpers.setValue(value);
    };

    return (
        <div>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <br />
            <Select
                {...field}
                {...props}
                value={field.value}
                onChange={handleChange}
                onBlur={() => helpers.setTouched(true)}
                className='w-100'
            >
                {options.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                        {option.label}
                    </Select.Option>
                ))}
            </Select>
            {hasError && <div className="error">{meta.error}</div>}
        </div>
    );
};


const FormikSmokingPreferences = ({ label, extra, option, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    return (
        <div className='col-md-12 mt-3'>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <div className={` ${extra.mainHead ? extra.mainHead : "preference-container"} `}>
                <div
                    className={`${extra.mainHead ? extra.mainHead : "preference-box"}  ${field.value === true ? "selected" : ""}`}
                    onClick={() => { if (!props.disabled) { setFieldValue(field.name, true) } }}
                >
                    {option.First}
                </div>
                <div
                    className={`${extra.mainHead ? extra.mainHead : "preference-box"} ${field.value === false ? "selected" : ""}`}
                    onClick={() => { if (!props.disabled) { setFieldValue(field.name, false) } }}
                >
                    {option.Second}
                </div>
            </div>
            {hasError && <div className="error">{meta.error}</div>}
        </div>
    );
};


const FormikAgePreferences = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className='col-md-12 mt-3'>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <InputGroup>
                <Field
                    autoComplete='off'
                    className='form-control customInputWhite rounded-0'
                    type='number'
                    id={`${field.name}_min`}
                    placeholder='Min'
                    name={`${field.name}.min`}
                />
                <Field
                    autoComplete='off'
                    className='form-control customInputWhite rounded-0'
                    type='number'
                    id={`${field.name}_max`}
                    placeholder='Max'
                    name={`${field.name}.max`}
                />
            </InputGroup>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export { CustomDynamicInputs, CustomDynamicSelect, CustomDynamicCheck, CustomDynamicRadio, FormikInput, FormikSelect, FormikSmokingPreferences, FormikAgePreferences }
