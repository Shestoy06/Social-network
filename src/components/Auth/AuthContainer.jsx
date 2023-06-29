import React, {Component} from 'react';
import Auth from "./Auth";
import axios from "axios";
import {connect} from "react-redux";
import {auth, login, setAuthUserData} from "../../redux/auth-reducer";
import App from "../../App";
import Preloader from "../../UI/Preloader/Preloader";

class AuthContainer extends Component {

    componentDidMount() {
        this.props.auth()
    }

    render() {
        if (!this.props.isLoaded) return <div
            style={{backgroundColor: '#212121', minHeight: 100 + 'vh', display: 'grid', placeItems: 'center'}}><Preloader/></div>
        if (this.props.isAuth) {
            return <App userAuthData={this.props.userAuthData}/>
        }
        return (
            <Auth {...this.props} loginUser={this.props.auth} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state) => ({
    userAuthData: state.auth,
    isAuth: state.auth.isAuth,
    isLoaded: state.auth.isLoaded
})

export default connect(mapStateToProps, {setAuthUserData, auth, login})(AuthContainer);