import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { ItemsList } from './ItemsList'
import './SearchResults.css'
export class SearchResults extends Component {
    constructor(props) {
        super(props)
        //this.props.perPage
        this.state = {
            offset: 0, //current page
            pageCount: 2,
        }
    }

    componentDidMount() {}
    renderData() {
        return this.props.data.results && this.props.data.results.length > 0 ? (
            <div>
                <div className="paginateWrapper">
                    <ReactPaginate
                        id="react-paginate"
                        previousLabel={'PREVIOUS'}
                        nextLabel={'NEXT'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount} //should be the page amount
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
                <ItemsList data={this.props.data.results}></ItemsList>
            </div>
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
