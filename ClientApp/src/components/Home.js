import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'
import './Home.css'
// import ls from 'local-storage'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { query: null, searchResultData: [], loading: false }
    }
    render() {
        return (
            <div>
                <SearchForm
                    onSubmit={data => {
                        if (data && data !== this.state.query) {
                            this.setState({ loading: true })
                            this.setState({ query: data })
                            fetch('api/search?term=' + data)
                                .then(response => response.json())
                                .then(data => {
                                    this.setState({
                                        searchResultData: data,
                                        loading: false,
                                    })
                                    console.log('Success:', data)
                                })
                                .catch(error => {
                                    console.error('Error:', error)
                                })
                        }
                    }}
                ></SearchForm>
                {this.state.loading && <div class="loader">Loading...</div>}
                {this.state.query && !this.state.loading && (
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
