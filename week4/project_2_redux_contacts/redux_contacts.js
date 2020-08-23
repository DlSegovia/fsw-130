const redux = require("redux")


function addContacts(contact) {
    return {
        type: "ADD_CONTACTS",
        payload: thing
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: thing
    }
}

const initialState = {
    contact: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case "REMOVE_CONTACT": {
            const arrCopy = [...state.contacts]
            
            const updatedArr = state.contacts.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                contacts: updatedArr
            }
        }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact("Raindrops on roses"))
store.dispatch(addContact("Whiskers on kittens"))


store.dispatch(removeContact("raindrops on roses"))