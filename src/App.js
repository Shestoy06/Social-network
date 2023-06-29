import './App.css';
import Header from "./components/Header/Header";
import {Redirect, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import AuthContainer from "./components/Auth/AuthContainer";


function App(props) {

    if (!props.userAuthData.isAuth) {
        return <AuthContainer/>
    }

    return (
        <div className="app">
            <Header/>
            <div className="flex-wrapper">
                <NavbarContainer/>
                <div></div> {/* void div for grid, made because of position: fixed of navbar */}
                <div className="content">
                    <Routes>
                        <Route path="/">
                            <Route path="profile/:userId?/*" element={<ProfileContainer/>}/>
                            <Route path="dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="news" element={<NewsContainer/>}/>
                            <Route path="music" element={<Music/>}/>
                            <Route path="users" element={<UsersContainer/>}/>
                            <Route path="settings" element={<Settings/>}/>
                            <Route path="login/*" element={<AuthContainer/>}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );

}

export default App;
