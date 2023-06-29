import s from './Settings.module.css'
import axios from "axios";
import Preloader from "../../UI/Preloader/Preloader";
import avatar from '../../img/avatar.png'

const Settings = (props) => {

    const axiosInstance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'Content-type': 'multipart/form-data'}
    });

    let  formData = new FormData()
    const profilePhoto = avatar
    formData.append('image', profilePhoto)
    axiosInstance.put('profile/photo').then(res => console.log(res))

    let inputFunc = (e) => {
        console.log(e.current)
    }
    return (
        <div>
            <Preloader/>
            <input type="file" onChange={inputFunc}/>
        </div>

    )
}

export default Settings