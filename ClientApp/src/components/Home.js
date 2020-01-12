import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'
import './styles/Home.css'
import { TopTen } from './TopTen'
// import ls from 'local-storage'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: null,
            page: -1,
            searchResultData: [],
            loading: false,
            toggleTopTen: false,
        }
        this.toggleTopTenView = this.toggleTopTenView.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    async addToHistory(term) {
        let ls = JSON.parse(localStorage.getItem('topTen')) || {}
        ls[term] = ls[term] + 1 || 1
        localStorage.setItem('topTen', JSON.stringify(ls))
        console.log(localStorage.getItem('topTen'))
    }
    handleSearch(data, page) {
        if (data && data !== this.state.query || (data && data === this.state.query && this.state.page !== page)) {
            this.addToHistory(data)
            this.setState({ loading: true, query: data, page })
            fetch('api/search?term=' + data + "&pagenumber=" + page)
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
                            onSubmit={(data) => { this.handleSearch(data, 1) }}
                        ></SearchForm>
                    </div>
                </div>

                {this.state.loading && <div class="loader">Loading...</div>}
                {this.state.query && !this.state.loading && (
                    <div>
                        <SearchResults
                            onPageChange={(page) => { this.handleSearch(this.state.query, page.selected) }}
                            data={this.state.searchResultData}
                        ></SearchResults>
                    </div>
                )}
            </div>
        )
    }
}
