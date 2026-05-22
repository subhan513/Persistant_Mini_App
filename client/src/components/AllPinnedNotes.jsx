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
    <div className="w-full bg-yellow-100 border-2 border-yellow-400 rounded p-3 sm:p-4 flex flex-col h-auto sm:max-h-[500px]">
      <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
        {title}
      </h2>
      <p className="text-gray-700 text-xs sm:text-sm mb-3 flex-grow overflow-y-auto">
        {content}
      </p>
      <div className="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer w-4 h-4"
          onClick={() => handlePinnedTask(id)}
          checked={isPinned}
        />
        <label className="text-gray-700 cursor-pointer text-xs sm:text-sm">
          Pinned
        </label>
      </div>
    </div>
  );
};

export default AllPinnedNotes;
