import React, { Component } from "react";
// import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component"
import Top from "./Top"

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string,
    
  };

  capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitaliseFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async update() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f46f99398f1a4fd0b1d9ceed16864903&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);

    let data = await fetch(url);
    this.props.setProgress(40);

    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.update();
  }

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.update();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.update();
  // };

  fetchMoreData = async () => {
    
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f46f99398f1a4fd0b1d9ceed16864903&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  render() {
    return (
      <>
        <h1 style={{ margin: "20px 60px" }}>
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

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          style={{overflow: "hidden"}}
        >
          <div className="container" >
                    <div className="row">
                      {this.state.articles.map((element) => {
                        return (
                          <div className="col-md-4" key={element.url}>
                            <NewsItem
                              title={
                                element.title.slice(45) != null
                                  ? element.title.slice(0, 45) + "..."
                                  : element.title.slice(0, 45)
                              }
                              description={
                                element.description !== null &&
                                element.description.length > 88
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
                      })}
                    </div>
            </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark "
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div> */}
        <Top/>
      </>
    );
  }
}

export default News;
