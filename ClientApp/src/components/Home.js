import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'
import './Home.css'
import { topTen, TopTen } from './TopTen'
// import ls from 'local-storage'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: null,
            searchResultData: [],
            loading: false,
            toggleTopTen: false,
        }
        this.toggleTopTenView = this.toggleTopTenView.bind(this)
    }

    async addToHistory(term) {
        let ls = JSON.parse(localStorage.getItem('topTen')) || {}
        ls[term] = ls[term] + 1 || 1
        localStorage.setItem('topTen', JSON.stringify(ls))
        console.log(localStorage.getItem('topTen'))
    }
    toggleTopTenView() {
        this.setState({
            toggleTopTen: !this.state.toggleTopTen,
        })
    }

    render() {
        return (
            <div>
                <div className="searchWrapper">
                    <div className="topTenWrapper">
                        <button
                            name="searchBtn"
                            onClick={this.toggleTopTenView}
                            className="btn btn-sm btn-primary"
                        >
                            TopTen
                        </button>
                        {this.state.toggleTopTen && <TopTen></TopTen>}
                    </div>
                    <div className="searchFormWrapper">
                        <SearchForm
                            onSubmit={data => {
                                if (data && data !== this.state.query) {
                                    this.addToHistory(data)
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
                    </div>
                </div>

                {this.state.loading && <div class="loader">Loading...</div>}
                {this.state.query && !this.state.loading && (
                    <div>
                        <SearchResults
                            data={this.state.searchResultData}
                        ></SearchResults>
                    </div>
                )}
            </div>
        )
    }
}
