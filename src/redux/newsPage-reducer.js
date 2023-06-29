const UPDATE_NEWS_INPUT_DATA = 'UPDATE-NEWS-INPUT-DATA'
const ADD_NEW_NEWS = 'ADD-NEW-NEWS'

let initState = {
    newsData: [
        {id: 1, newsContent: 'Yesterday...'},
        {id: 2, newsContent: 'Tomorrow...'},
    ],
    newsInputData: ''
}

const newsPageReducer = (state = initState, action) => {

    switch (action.type) {

        case UPDATE_NEWS_INPUT_DATA: {
            return {
                ...state,
                newsInputData: action.newNewsValue
            }
        }

        case ADD_NEW_NEWS: {
            let newNews = {id: 2, newsContent: state.newsInputData}
            return {
                ...state,
                newsData: [...state.newsData, newNews],
                newsInputData: ''
            }
        }
        default:
            return state
    }
}

export const addNewsActionCreator = () => ( {type: ADD_NEW_NEWS} )
export const updateNewNewsDataActionCreator = (text) => (
    {type: UPDATE_NEWS_INPUT_DATA, newNewsValue: text}
)


export default newsPageReducer