import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from "redux"
import { Provider } from "react-redux"

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

const initialState = {
    item: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_ITEM":
            return {
                item: action.payload
            }
        default:
            return state;
    }
}
/* eslint-disable no-underscore-dangle */
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* eslint-enable */

store.dispatch({ type: "NEW_ITEM" })
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
)

registerServiceWorker()
