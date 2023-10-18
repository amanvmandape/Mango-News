import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (
      <div className='col-md-4 my-3'>
        <div className="card">
          <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
            <span className=" badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
              {source}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-danger">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
