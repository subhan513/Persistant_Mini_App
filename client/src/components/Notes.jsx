import React, { useEffect, useState } from "react";
import {
  useGetNodeMutation,
  useGetNotesMutation,
} from "../redux/features/NotesApi";
import { useSelector } from "react-redux";
import NotesCard from "../components/NotesCard";
const Notes = ({ EditOpen, setEditOpen }) => {
  const [getNotes, { isSuccess, loading, error, data }] = useGetNotesMutation();
  useEffect(() => {
    getNotes();
  }, [isSuccess, loading, error]);
  const { Notes } = useSelector((state) => state.notes);
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-3 sm:p-4 text-gray-800">
        All Notes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4">
        {Notes && Notes.length > 0 ? (
          Notes.map((note) => {
            return (
              <NotesCard
                key={note._id}
                title={note.title}
                content={note.content}
                isPinned={note.isPinned}
                id={note._id}
                EditOpen={EditOpen}
                setEditOpen={setEditOpen}
              />
            );
          })
        ) : (
          <p className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-gray-500 py-8">
            No notes yet. Create one to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default Notes;
