import React, { Component } from 'react'

export class Details extends Component {
    constructor(props) {
        super(props)
        this.id = props.id
    }
    componentDidMount() {}

    render() {
        return (
            <div>
                <h1>Data</h1>

                <p>Video</p>

                <p>Music</p>

                <button
                    className="btn btn-primary"
                    onClick={this.incrementCounter}
                >
                    Increment
                </button>
            </div>
        )
    }
}
