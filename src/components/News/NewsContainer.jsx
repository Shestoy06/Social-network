import React from "react";
import News from "./News";
import {addNewsActionCreator, updateNewNewsDataActionCreator} from "../../redux/newsPage-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newsData: state.newsPage.newsData,
        newsInputData: state.newsPage.newsInputData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewNewsData: (text) => {
            dispatch(updateNewNewsDataActionCreator(text))
        },
        addNewNews: () => {
            dispatch(addNewsActionCreator())
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer