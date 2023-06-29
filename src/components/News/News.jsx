import s from './News.module.css'
import React from "react";
import NewsItem from "./NewsItem/NewsItem";


const News = (props) => {

    let NewsItems = props.newsData
        .map( item => <NewsItem newsContent={item.newsContent} key={item.id}/> );

    let onUpdateNewNewsData = (e) => {
        let text = e.target.value
        props.updateNewNewsData(text)
    }

    let onAddNewNews = () => {
        props.addNewNews()
    }

    return (
        <div className={s.news}>
            News
            {NewsItems}
            <input type="text" placeholder="Type news..."
                   value={props.newsInputData}
                   onChange={ onUpdateNewNewsData }
            />
            <div className="">
                <button onClick={ onAddNewNews }>Send</button>
            </div>
        </div>

    )
}

export default News