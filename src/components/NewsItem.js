import React, { Component } from 'react'

export class NewsItem extends Component {

    

    render() {
        let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
        return (
            <div className="my-3">
               <div className="card" >
                   <div style={{display: 'flex', justifyContent: 'flex-end',position:'absolute',right:0}}>

                    <span className="badge rounded-pill bg-primary" >
                            {source}
                    </span>
                   </div>
                    <img src={imageUrl?imageUrl:"https://static.toiimg.com/thumb/msid-78740738,width-1070,height-580,imgsize-48340,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}
                        </small></p>
                        <a href={newsUrl} rel="noopener noreferrer"target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
               </div> 
            </div>
        )
    }
}

export default NewsItem
