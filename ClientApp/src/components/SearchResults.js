import React, { Component } from 'react'
import { ItemsList } from './ItemsList'
import './styles/SearchResults.css'
export class SearchResults extends Component {
    render() {
        return this.props.data.results && this.props.data.results.length > 0 ? (
            <div>
                <ItemsList data={this.props.data.results}></ItemsList>
            </div>
        ) : (
            <div>
                <h3>No Results</h3>
            </div>
        )
    }
}
