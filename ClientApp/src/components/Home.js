import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'
import { ToastProvider, useToasts } from 'react-toast-notifications'

export class Home extends Component {
    const { addToast } = useToasts();

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
                            fetch('api/search?term=' + data)
                                .then(response => response.json())
                                .then(data => {
                                    this.setState({
                                        searchResultData: data,
                                    })
                                    console.log('Success:', data)
                                })
                                .catch(error => {
                                    console.error('Error:', error)
                                })
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
