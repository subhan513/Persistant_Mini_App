import React, { useState } from "react";
import {
  useDeleteNoteMutation,
  useGetAllPinnedTasksMutation,
  useGetNodeMutation,
  useGetNotesMutation,
  useUpdatePinnedTaskMutation,
} from "../redux/features/NotesApi";

const NotesCard = ({ title, content, id, EditOpen, setEditOpen, isPinned }) => {
  const [getNode, { isSuccess, error, data }] = useGetNodeMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const [getNotes] = useGetNotesMutation();
  const [UpdatePinnedTask] = useUpdatePinnedTaskMutation();
  const [getAllPinnedTasks] = useGetAllPinnedTasksMutation();
  const handleNoteEdit = async (id) => {
    setEditOpen(true);
    await getNode(id);
  };
  const handleNoteDelete = async (id) => {
    await deleteNote(id);
    await getNotes();
  };
  const handlePinnedTask = async (id) => {
    await UpdatePinnedTask(id);
    await getAllPinnedTasks();
    await getNotes();
  };
  return (
    <div className="w-full bg-white border border-gray-300 rounded p-3 sm:p-4 flex flex-col h-auto sm:max-h-[500px]">
      <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
        {title}
      </h2>
      <p className="text-gray-700 text-xs sm:text-sm mb-3 flex-grow overflow-y-auto">
        {content}
      </p>
      <div className="mt-2 flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          className="cursor-pointer w-4 h-4"
          onClick={() => handlePinnedTask(id)}
          checked={isPinned}
        />
        <label className="text-gray-700 cursor-pointer text-xs sm:text-sm">
          {isPinned ? "✓ Pinned" : "Pin this"}
        </label>
      </div>
      <div className="flex gap-2 sm:gap-3">
        <button
          className="flex-1 text-white p-2 sm:p-2 bg-blue-600 rounded cursor-pointer hover:bg-blue-700 text-xs sm:text-sm font-medium"
          onClick={() => handleNoteEdit(id)}
        >
          Edit
        </button>
        <button
          className="flex-1 text-white p-2 sm:p-2 bg-red-600 rounded cursor-pointer hover:bg-red-700 text-xs sm:text-sm font-medium"
          onClick={() => handleNoteDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
