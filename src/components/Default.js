import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="col-10 mx-auto d-flex flex-column justify-content-center align-items-center p-5">
                <div className="display-4">
                    404
                </div>
                <h3 className="mt-3"> The page you are looking for <span className="text-danger">{this.props.location.pathname}</span> doesn't exist!</h3>
            </div>
        )
    }
}
