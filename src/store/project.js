import { createSlice } from "@reduxjs/toolkit";

let id=0;
const slice= createSlice({
    name:"projects",
    initialState:[],
    reducers: ({
        projectAdd:(projects,actions)=>{
            projects.push({
                id: ++id,
                title:actions.payload.title,
                startDate:actions.payload.date
            })

        }
    })
})


export const  { projectAdd }=slice.actions;

export default slice.reducer;