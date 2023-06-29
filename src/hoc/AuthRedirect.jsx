import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsWithAuth = (state) => ({
    isAuth: state.auth.isAuth
})

const AuthRedirect = (Component) => {
    let AuthRedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to='/login'/>
        }
        return <Component {...props}/>
    }
    AuthRedirectComponent = connect(mapStateToPropsWithAuth, {})(AuthRedirectComponent)
    return AuthRedirectComponent
};



export default AuthRedirect;