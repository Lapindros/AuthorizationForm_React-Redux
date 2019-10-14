import {createStore} from 'redux'
import rootReducer from "./reducers/rootReducer";


const saveState = (state) => {
    try {
        // Convert the state to a JSON string
        const serialisedState = JSON.stringify(state);

        // Save the serialised state to localStorage against the key 'app_state'
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        // Log errors here, or ignore
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app_state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const persistedState = loadState();

/**
 * This is where you create the app store
 */
const store = createStore(rootReducer, persistedState);
/**
 * Add a change listener to the store, and invoke our saveState function defined above.
 */
store.subscribe(() => {
    saveState(store.getState());
});


export default store;
export const dispatch = store.dispatch;
export const getState = store.getState;


