import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'
import { ToastsContainer, ToastsStore } from 'react-toasts'
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
                            fetch('api/search?term=' + data)
                                .then(response => response.json())
                                .then(data => {
                                    if (data.success) {
                                        this.setState({
                                            searchResultData: data,
                                        })
                                        if (data.resultCount > 0) {
                                            ToastsStore.success(
                                                `found ${data.resultCount} results!`
                                            )
                                        } else {
                                            ToastsStore.warning(
                                                'No results found'
                                            )
                                        }
                                        console.log('Success:', data)
                                    } else {
                                        ToastsStore.error(data.errorMessage)
                                    }
                                })
                                .catch(error => {
                                    ToastsStore.error('an error occured')
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
                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}
