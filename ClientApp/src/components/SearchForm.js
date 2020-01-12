import React, { Component } from 'react'

export class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = { search: '', error: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ search: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state.search)
    }

    render() {
        return (
            <div>
                <form
                    class="needs-validation"
                    onSubmit={this.handleSubmit}
                    className="form-horizontal"
                >
                    <legend>Type to search from ITunes</legend>

                    <div className="form-group">
                        <label
                            className="col-md-4 control-label"
                            htmlFor="Search"
                        >
                            Submit your search
                        </label>
                        <div className="col-md-4">
                            <input
                                id="Search"
                                name="Search"
                                value={this.state.search}
                                type="text"
                                onChange={this.handleChange}
                                placeholder="Metallica"
                                className="form-control input-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label
                            className="col-md-4 control-label"
                            htmlFor="searchBtn"
                        ></label>
                        <div className="col-md-4">
                            <button
                                type="submit"
                                value="Submit"
                                id="searchBtn"
                                name="searchBtn"
                                className="btn btn-primary"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
