import { useEffect, useState } from "react"
import { useCreateNoteMutation, useGetNotesMutation } from "../redux/features/NotesApi";
import toast from "react-hot-toast";

const CreateNotes = ({Open,setOpen}) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [createNote,{data,isSuccess,error}] = useCreateNoteMutation();
const [getNotes] = useGetNotesMutation();
  useEffect(()=>{
    if(isSuccess){
      toast.success("Note created successfully")
      setTitle("");
      setContent("");
      return;
    }
    if(error){
      toast.error("Failed to create note")
    }
  },[isSuccess,error])
  const handleCreateNotes = async () =>{

    const formData = {
      title,
      content
    }
    try {
      await createNote(formData);
      await getNotes();
      setOpen(false)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
    className='w-full flex flex-col items-center justify-center'>
      <h1 className='text-6xl text-white'>Create Notes</h1>
      <div className="flex flex-col w-[50%] h-[50%]">
        <label htmlFor="title" className='text4xl text-white'>Title</label>
        <input type="text" id="title" className='text-white border-white border-[2px]' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="content" className="text-white">Content</label>
        <textarea name="content"  rows="6" id="content" className='border-black border-[1px] text-white' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button className='bg-purple-500 text-white py-2 px-4 rounded rounded mt-2 cursor-pointer hover:bg-green-800'
        onClick={handleCreateNotes}
         >Save</button>
      </div>
      </div>
  )
}

export default CreateNotes