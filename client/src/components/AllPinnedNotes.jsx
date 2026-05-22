import React, { useState } from "react";
import {
  useDeleteNoteMutation,
  useGetNodeMutation,
  useGetNotesMutation,
  useUpdatePinnedTaskMutation,
} from "../redux/features/NotesApi";

const AllPinnedNotes = ({
  title,
  content,
  id,
  EditOpen,
  setEditOpen,
  isPinned,
}) => {
  const [getNode, { isSuccess, error, data }] = useGetNodeMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const [getNotes] = useGetNotesMutation();
  const [UpdatePinnedTask] = useUpdatePinnedTaskMutation();
  const handlePinnedTask = async (id) => {
    await UpdatePinnedTask(id);
    await getNotes();
  };
  return (
    <div className="w-full bg-yellow-100 border-2 border-yellow-400 rounded p-4 flex flex-col max-h-[80vh]">
      <h2 className="text-lg font-bold text-gray-800 mb-2 min-h-[15vh]">
        {title}
      </h2>
      <p className="text-gray-700 text-sm mb-3 flex-grow overflow-y-auto min-h-[30vh]">
        {content}
      </p>
      <div className="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer"
          onClick={() => handlePinnedTask(id)}
          checked={isPinned}
        />
        <label className="text-gray-700 cursor-pointer">Pinned Task</label>
      </div>
    </div>
  );
};

export default AllPinnedNotes;
