import React, { Component } from 'react'
import './topTen.css'
export class TopTen extends Component {
    constructor(props) {
        super(props)
        this.state = { firstTen: [] }
        this.localStorageUpdated = this.localStorageUpdated.bind(this)
    }
    localStorageUpdated() {
        var arr = []

        let target = JSON.parse(localStorage.getItem('topTen'))
        for (var p in target) {
            arr.push({ key: p, value: target[p] })
        }
        arr.sort(function(a, b) {
            return b.value - a.value
        })
        this.setState({
            firstTen: arr.slice(0, 10),
        })
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.setState({
                status: localStorage.getItem('localstorage-status')
                    ? true
                    : false,
            })
            window.addEventListener('storage', this.localStorageUpdated)
        }
        this.localStorageUpdated()
    }

    render() {
        return this.state.firstTen.map((item, index) => (
            <div className="topTenItem" key={index}>
                {index + 1}. {item.key}
            </div>
        ))
    }
}
