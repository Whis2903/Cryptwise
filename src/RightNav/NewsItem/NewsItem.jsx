import React from 'react'
import './NewsItem.css'

const NewsItem = ({title, url, urlToImage, author, date}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className='nwi-whole'>
    <div className='news-box' >
        <div className='news-content'>
        <div className='nwcontent'>
        <img className='news-img' src={urlToImage}/>
        <div className='nw-text'>
            <div className='author'>{author}</div>
            <a href={url} target="_blank" rel="noreferrer noopener">{title}</a>
        </div>
        </div>
        <div className='date'>{date}</div>
        </div>
    </div>
    </a>
  )
}

export default NewsItem