import React from 'react';
import s from './Input.module.css'

const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.Input}>
            <div className={s.Input__inner}>
                <input type="text" className={hasError && s.error} {...input} {...props}/>
                { hasError && <span className={s.errorText}>{meta.error}</span>}
            </div>
        </div>
    );
};

export default Input;