import React, { useEffect, useState } from 'react'
import { useGetNodeMutation, useGetNotesMutation } from '../redux/features/NotesApi'
import { useSelector } from 'react-redux';
import NotesCard from "../components/NotesCard"
const Notes = ({EditOpen,setEditOpen}) => {
  const [getNotes,{isSuccess,loading,error,data}] = useGetNotesMutation()
  useEffect(()=>{
   getNotes();
  },[isSuccess,loading,error])
  const {Notes} = useSelector((state)=>state.notes);
  return (
    <div>
      <h1 className='text-6xl p-4'>All Notes</h1>
     <div className='grid grid-cols-3 gap-4 p-4'>
       {
        Notes.map((note)=>{
          return <NotesCard  title={note.title} content={note.content} isPinned={note.isPinned} id={note._id} EditOpen={EditOpen} setEditOpen={setEditOpen}/>
        })
      }
     </div>
    </div>
  )
}

export default Notes