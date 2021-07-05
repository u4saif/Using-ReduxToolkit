import configureStore from './store/store'
import * as bugActions from './store/bug'
import  * as projectActions from './store/project';

const store = configureStore();
//First action 
store.dispatch(projectActions.projectAdd({title:"Water Mgm system", date: "23-3-2021"}))
 
store.dispatch( bugActions.bugAdded({discription:"Bug 1 is added "})); 

store.dispatch( bugActions.bugAdded({discription:"Bug 2 is added "})); 

store.dispatch( bugActions.bugAdded({discription:"Bug 3 is added "})); 
store.dispatch(bugActions.bugResolved({id:2}));
console.log(store.getState())

console.log(bugActions.getUnresolvedBugs(store.getState()));
