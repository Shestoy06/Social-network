import Navbar from "./Navbar";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

let mapStateToProps = (state) => {
    return {
        friendsData: state.navBar.friendsData
    }
}


const NavbarContainer = connect(mapStateToProps, {logout})(Navbar)

export default NavbarContainer