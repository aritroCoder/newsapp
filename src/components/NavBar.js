import React, { Component } from 'react'
import data from '../sampleoutput.json'

import {
    
    Link
  } from "react-router-dom";

export class NavBar extends Component {

    constructor(){
        super();
        this.state={
            query:''
        }
        let newsFilter;
    }

    static propTypes = {

    }

    //experimental search
    handleSearch=(event)=>{
        console.log(event.target.value);
        this.query=event.target.value;
        this.newsFilter=data.filter((value)=>{
            return value.title.includes(this.query)||value.description.includes(this.query) ;
        })
        console.log(this.newsFilter);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" to="#">Action</a></li>
                            <li><a className="dropdown-item" to="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" to="#">Something else here</a></li>
                        </ul>
                        </li> */}
                        {/* <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    
                    {/* <span className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearch} />
                        <button className="btn btn-outline-success"  onClick={this.handleSearch}>Search</button>
                    </span> */}
                    
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
