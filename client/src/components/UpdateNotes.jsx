import { useEffect, useState } from "react"
import { useCreateNoteMutation, useGetNotesMutation, useUpdateNoteMutation } from "../redux/features/NotesApi";
import toast from "react-hot-toast";

const UpdateNotes = ({note,setEditOpen}) => {
  const [title, setTitle] = useState(note?.title)
  const [content, setContent] = useState(note?.content)
  const [UpdateNote] = useUpdateNoteMutation()
  const [getNotes] = useGetNotesMutation()
  const handleUpdateNote = async () => {
  const data = {
    title,
    content,
  };

  await UpdateNote({
    id: note?._id,
    data,
  });

  setEditOpen(false);

  await getNotes();
};
  return (
    <div
    className='w-full flex flex-col items-center justify-center'>
      <h1 className='text-6xl text-white'>Update Note</h1>
      <div className="flex flex-col w-[50%] h-[50%]">
        <label htmlFor="title" className='text4xl text-white'>Title</label>
        <input type="text" id="title" className='text-white border-white border-[2px]' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="content" className="text-white">Content</label>
        <textarea name="content"  rows="6" id="content" className='border-black border-[1px] text-white' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button className='bg-purple-500 text-white py-2 px-4 rounded rounded mt-2 cursor-pointer hover:bg-green-800'
        onClick={handleUpdateNote}
         >Update</button>
      </div>
      </div>
  )
}

export default UpdateNotes