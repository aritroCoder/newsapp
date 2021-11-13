import React, { Component } from "react";
// import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";

export class News extends Component {
  
  
  // constructor() {
  //   super();
  //   console.log("Hi this is constructor");
  //   this.state = {
  //     articles: this.SamplearticlesJSON,
  //     loading: false,
  //   };
  // }
  constructor() {
    super();
    this.state = {
        articles : [],
        loading : false
    }
}

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=f46f99398f1a4fd0b1d9ceed16864903";
    // let data = await fetch(url).then((res) => res.json())
    // .then((json) => {
    //     this.setState({
    //         articles: json.articles,
    //         loading: false
    //     });
    // })
    let data= await fetch(url)

    let parsedData= await data.json();
    // console.log(parsedData);
    this.setState({articles: parsedData.articles})
    // console.log(this.state.articles)
  }

  render() {
    return (
      <div className="container my-3">
        <h1> News Headlines  <span style={{backgroundColor:"orange",padding:"0px 22px" ,borderRadius:"4px"}}>#AsliNews</span>  </h1>
        <div className="row">

        
          
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem              
              title={element.title.slice(45)!=null? element.title.slice(0,45)+"..." : element.title.slice(0,45) }
              description={element.description!=undefined ? element.description.slice(0,88):element.description}
              imageUrl={element.urlToImage} newsUrl={element.url}
            />
          </div>
          })}
      

          {/* {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem              
              title={element.title.slice(45)!=null? element.title.slice(0,45)+"..." : element.title.slice(0,45) }
              description={element.description!=undefined ? element.description.slice(0,88):element.description}
              imageUrl={element.urlToImage} newsUrl={element.url}
            />
          </div>
          })} :  */}
          
        </div>
      </div>
    );
  }
}

export default News;
