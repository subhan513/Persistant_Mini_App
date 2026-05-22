import {createSlice } from "@reduxjs/toolkit";

const initialState = {
  Notes : [],
  Note : null,
  PinnedTasks : []
}
const NotesSlice = createSlice({
  name : "notes",
  initialState,
  reducers : {
    getAllNotes : (state,action)=>{
      state.Notes = action.payload.Notes;
    },
    getNode : (state,action)=>{
      state.Note = action.payload.Note;
    },
    getAllPinnedNotes : (state,action)=>{
      state.PinnedTasks = action.payload.PinnedTasks
    }
  }
})

export default NotesSlice.reducer;
export const {getAllNotes,getNode,getAllPinnedNotes} = NotesSlice.actions; 