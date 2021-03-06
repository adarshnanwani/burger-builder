import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    const { invalid, shouldValidate, touched, elementType, elementConfig, value, changed, label } = props;
    
    if (invalid && shouldValidate && touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (elementType) {
        case 'input':
            inputElement = <input
                className={inputClasses.join(' ')}
                {...elementConfig}
                value={value}
                onChange={changed} />;
            break;
        case 'textarea':
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...elementConfig}
                value={value}
                onChange={changed} />
            break;
        case 'select':
            inputElement = (<select
                className={inputClasses.join(' ')}
                onChange={changed}
                value={value}>
                {elementConfig.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                ))}
            </select>)
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props}
                value={value}
                onChange={changed} />;
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    )
}


export default input;