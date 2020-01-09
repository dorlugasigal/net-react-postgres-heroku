import React, { Component } from 'react'

export class SearchResults extends Component {
    componentDidMount() {}
    renderData() {
        return this.props.data.length > 0 ? (
            this.props.data.map((item, index) => (
                <div>
                    <p>asdsad</p>
                    <p>asdsad</p>
                </div>
            ))
        ) : (
            <div>
                <h3>No Results</h3>
            </div>
        )
    }

    render() {
        return this.renderData()
    }
}
