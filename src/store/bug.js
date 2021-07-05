import { createSelector, createSlice } from "@reduxjs/toolkit";

let id = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
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
  }
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;

//Selector
//export const getUnresolvedBugs=state=> state.entities.bugs.filter(bug=> bug.resolved!=true);

//Memoization get bugs from cache
export const getUnresolvedBugs= createSelector(
  state=>state.entities.bugs,
  state=>state.entities.projects,
  (bugs,projects)=>bugs.filter(bug=> bug.resolved!=true)
)
