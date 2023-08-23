import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className='my-3'><div className="card" style={{width: "18rem;"}}>
      <img src={!imageUrl?"https://glendalecherrycreek.com/wp-content/uploads/2016/03/breaking-news-red.jpg":imageUrl} className="card-img-top" alt="..."  style={{width: "300px;", height:"auto;"}}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer"  className="btn btn-primary">READ MORE</a>
      </div>
    </div></div>
    )
  }
}

export default NewsItem