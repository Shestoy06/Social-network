import avatar1 from "../img/avatars/ava1.jpg";
import avatar2 from "../img/avatars/ava2.jpg";
import avatar3 from "../img/avatars/ava3.jpg";

let initState = {
    friendsData: [
        {id: 1, avatar: avatar1},
        {id: 2, avatar: avatar2},
        {id: 3, avatar: avatar3}
    ]
}

const navbarReducer = (state = initState, action) => {
    return state
}



export default navbarReducer