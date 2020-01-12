import { autorun, observable, decorate } from 'mobx'

class ItemStore {
    item = {}
}

var store = (window.store = new ItemStore())
export default store

autorun(() => {
    console.log(store.item)
})

decorate(ItemStore, {
    item: observable,
})
