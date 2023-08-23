import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false

    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=29b8bd1d403a4aa7a323884fa7641f4c&pagesize=21"
    let data= await fetch(url)
    let parsedData = await data.json()  
    this.setState({articles: parsedData.articles})

  }
  render() {
    return (
      <div className="container my-3">
        <h1 style={{ color: 'red' }}>Urban-Update Top-21-Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage  } newsUrl={element.url}/>
            </div>
           })}
          
          
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-secondary">&larr; Previous</button>
          <button type="button" className="btn btn-primary">Next &rarr;</button>
          </div>
        </div>
      
    );
  }
}

export default News;
