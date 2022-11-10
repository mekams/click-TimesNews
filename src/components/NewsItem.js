import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let{title,description,imageUrl,newsUrl} = this.props      //initialising props in class based component
    return (
      <div className='my-3' >
        <div className="card" style={{width:"18rem"}}>                {/*card using bootstrap */}
          <img src={imageUrl?imageUrl:"https://media0.giphy.com/media/Z9WQLSrsQKH3uBbiXq/giphy.gif"} className="card-img-top" alt="Loading.."/>  {/*Ternary operator used to  fill out image url[] */}
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">View more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
