const redux = require("redux")


function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {
    contacts: []
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
            
            const updatedArr = state.contacts.filter(thing => thing.id !== action.payload)
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

store.dispatch(addContact({name: "Potato Head", phone: 768-286-4323, email: "potato.head@toystory.dis", id: 1}))
store.dispatch(addContact({name: "Buzz Lightyear", phone: 289-954-4489, email: "buzz.lightyear@toystory.dis", id: 2}))


store.dispatch(removeContact( 1))