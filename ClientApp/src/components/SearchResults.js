import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import { ItemsList } from "./ItemsList"

export class SearchResults extends Component {
    constructor(props) {
        super(props);
        //this.props.perPage
        this.state = {
            data: [],
            offset: 0, //current page
        };
    }

    componentDidMount() { }
    renderData() {
        return this.props.data.length > 0 ? (
            <div>
                <ItemsList data={this.props.data}></ItemsList>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
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
