import React, { Component } from 'react'
// import loading from '../loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
            
        )
    }
}

export default Spinner
