import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'
export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { query: null, searchResultData: [] }
    }
    render() {
        return (
            <div>
                <SearchForm
                    onSubmit={data => {
                        if (data) {
                            this.setState({ query: data })
                            // fetch('api/search?query=' + data)
                            //     .then()
                            //     .catch()
                        }
                    }}
                ></SearchForm>
                {this.state.query && (
                    <div>
                        <hr></hr>
                        <SearchResults
                            data={this.state.searchResultData}
                        ></SearchResults>
                    </div>
                )}
            </div>
        )
    }
}
