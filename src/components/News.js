import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(props){
    super(props)                                   //super() is a must to be used here before initialising any other constructor because its super class.
    console.log("Hello how are you ?")
    this.state ={                             //creating state 
        article :[],                          //state initialised and will be set afterwards.
        load :false
    }
  }
  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?apiKey=84aae13f46344842ac4d03acb8c60322&q=news"  //api used to 
    let data =await fetch(url)
    let parsedData= await data.json()                  // extract the data from response of URL using json method
    console.log(parsedData)                           // just to check response in console of chrome
    this.setState({article: parsedData.articles})     //sets the articles on webpage cards: " 'articles' are named in fetched url"
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Click Times - Top Headlines </h1>
        <div className= "row" >
        {this.state.article.map((elements) =>{
          return <div className= "col md-4" key={elements.url}>
          <NewsItem title={elements.title?elements.title.slice(0,45):""} description={elements.description?elements.description.slice(0,30):""} imageUrl={elements.urlToImage} newsUrl={elements.url}/>
        </div> 
        })}
        </div>
      </div>
    )
  }
}

export default News
