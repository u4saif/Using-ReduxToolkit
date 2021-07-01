import configureStore from './store/store'
import  * as actions from './store/bug';

const store = configureStore();

//First action 
store.dispatch( actions.bugAdded({discription:"Bug 1 is added "})); 

store.dispatch( actions.bugAdded({discription:"Bug 2 is added "})); 

store.dispatch( actions.bugAdded({discription:"Bug 3 is added "})); 
store.dispatch(actions.bugResolved({id:2}));
console.log(store.getState())
