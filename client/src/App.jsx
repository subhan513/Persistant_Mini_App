import { useEffect, useState } from "react";
import CreateNotes from "./components/CreateNotes";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import UpdateNotes from "./components/UpdateNotes"
import AllPinnedNotes from "./components/AllPinnedNotes.jsx"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllPinnedTasksMutation } from "./redux/features/NotesApi.js";

const App = () => {
  const [Open, setOpen] = useState(false);
  const [EditOpen,setEditOpen] = useState(false)
  const {Note,PinnedTasks} = useSelector((state)=>state.notes)
  console.log(PinnedTasks);
  const [ getAllPinnedTasks] = useGetAllPinnedTasksMutation();
  useEffect(()=>{
   getAllPinnedTasks();
  },[])
  return (
    <BrowserRouter>

      <div className="relative w-full min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar setOpen={setOpen} />
        {/* Routes */}
        <h1 className="text-5xl p-3">All Pinned Tasks</h1>
              <div className="grid grid-cols-3 gap-3 p-3">
          {
          PinnedTasks?.map((note)=>{
            return  <AllPinnedNotes title={note.title} content={note.content} id={note._id} isPinned={note.isPinned}/>
          })
        }
      </div>
        <Routes>

          <Route
            path="/"
            element={
              <Notes
                EditOpen={EditOpen}
                setEditOpen={setEditOpen}
              />
            }
          />

        </Routes>

        {/* Popup Modal */}
        {Open && (
          <div
            className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/40 backdrop-blur-sm p-5"
            onClick={() => setOpen(false)}
          >

            <div
              className="w-[70%] h-[70%] flex items-center justify-center bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <CreateNotes setOpen={setOpen} />
            </div>

          </div>
        )}
       {EditOpen && (
          <div
            className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/40 backdrop-blur-sm p-5"
            onClick={() => setEditOpen(false)}
          >

            <div
              className="w-[70%] h-[70%] flex items-center justify-center bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <UpdateNotes setEditOpen={setEditOpen} note={Note} />
            </div>

          </div>
        )}
      </div>

    </BrowserRouter>
  );
};

export default App;