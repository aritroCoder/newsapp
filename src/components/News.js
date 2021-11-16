import React, { Component } from "react";
// import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    country: "in",
    pageSize: 8,
    category: "general"
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string
  }
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
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async update(){
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f46f99398f1a4fd0b1d9ceed16864903&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    
    let data = await fetch(url);

    let parsedData = await data.json();
    
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f46f99398f1a4fd0b1d9ceed16864903&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    
    // let data = await fetch(url);

    // let parsedData = await data.json();
    
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
    this.update();
    
  }

  handlePrevClick = async () => {
    // console.log("previous");

    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f46f99398f1a4fd0b1d9ceed16864903&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

    //   this.setState({loading: true});
    
    // let data = await fetch(url);

    // let parsedData = await data.json();
    
    // this.setState({ articles: parsedData.articles });
    // this.setState({ page: this.state.page - 1});
    // this.setState({loading: false});
    this.setState({page: this.state.page-1})
    this.update();
  };

  handleNextClick = async () => {
    // console.log("Next");

    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
      
    

    //   let url =
    //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f46f99398f1a4fd0b1d9ceed16864903&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
      
    //   let data = await fetch(url);

    //   let parsedData = await data.json();

    //   this.setState({loading: false});
      
    //   this.setState({ articles: parsedData.articles });
    //   this.setState({ page: this.state.page + 1});
    this.setState({page: this.state.page+1})
    this.update();

  }


  render() {
    return (
      <div className="container my-3">
        
        <h1 style={{margin:"20px 0px"}}>
          {" "}
          News Headlines{" "}
          {/* <span
            style={{
              backgroundColor: "orange",
              padding: "0px 22px",
              borderRadius: "4px",
            }}
          >
            #AsliNews
          </span>{" "} */}
        </h1>
        {this.state.loading && <Spinner/>}


        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title.slice(45) != null
                      ? element.title.slice(0, 45) + "..."
                      : element.title.slice(0, 45)
                  }
                  description={
                    element.description!==null && element.description.length > 88
                      ? element.description.slice(0, 88)
                      : element.description
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })
          }

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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page<=1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-dark "
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
