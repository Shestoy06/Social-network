import React from 'react';
import s from './Auth.module.css'
import {reduxForm} from "redux-form";
import {Field} from "redux-form"
import {setAuthUserData} from "../../redux/auth-reducer";
import {maxLengthCreator, requiredField} from "../../utils/validators/validate";
import Input from "../../UI/Input";

const Auth = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password)
    }

    return (
        <div className={s.auth}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

let maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <span className={s.title}>Login</span>
            <div>
                <Field component={Input} name={"email"} placeholder={"Login"} validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"Password"} validate={[requiredField]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Auth;