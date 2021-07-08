import { createSelector, createSlice } from "@reduxjs/toolkit";

let id = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugRecived:(bugs,action)=>{
      bugs.push(action.payload.data);
    },
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++id,
        discription: action.payload.discription,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    errorOnGet:(bugs, action)=>{
      alert(action.payload.payload.message);
    }
  }
});

export const { bugAdded, bugResolved, bugRecived,errorOnGet} = slice.actions;
export default slice.reducer;

// Action Creators
export const getProductList=() => (dispatch) =>{
  return dispatch({type: "apiCallStarted" , payload: {
    url: "https://prodbysaif.herokuapp.com/api/products",
    onError: "errorOnGet",
    onSucess: "bugRecived"
}})
};

//Selector
//export const getUnresolvedBugs=state=> state.entities.bugs.filter(bug=> bug.resolved!=true);

//Memoization get bugs from cache

export const getUnresolvedBugs= createSelector(
  state=>state.entities.bugs,
  state=>state.entities.projects,
  (bugs,projects)=>bugs.filter(bug=> bug.resolved!=true)
)
