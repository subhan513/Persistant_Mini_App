import Notes from "../model/notes.model.js";

export const CreateNotes = async (req,res) => {
  const formData = req.body;
  try {
    if(formData.title === "" || formData.content === ""){
      return res.status(400).json({
        success : false,
        message : "Title and content are required",
      })
    }
    const newNote = await Notes.create(formData);
    res.status(201).json({
      success : true,
      message : "Note created successfully",
      data : newNote,
    })
  } catch (error) {
    res.status(500).json({
      success : false,
      message : "Failed to create note",
    })
  }
}

export const getAllNotes = async (req,res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json({
      success : true,
      message : "Notes retrieved successfully",
      Notes : notes
    })
  } catch (error) {
    res.status(500).json({
      success : false,
      message : "Failed to retrieve notes",
    })
  }
}


export const UpdateNotes = async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedData = req.body;

    const UpdatedNote = await Notes.findByIdAndUpdate(
      noteId,
      updatedData,
      {
        returnDocument: "after",
      }
    );

    if (!UpdatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: UpdatedNote,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update note",
    });
  }
};

export const getNode = async (req,res) => {
  try {
    const noteId = req.params.id;
    const note = await Notes.findById(noteId);
    if(!note){
      return res.status(404).json({
        success : false,
        message : "Note not found",
      })
    }
    res.status(200).json({
      success : true,
      message : "Note retrieved successfully",
      data : note
    })
  } catch (error) {
    res.status(500).json({
      success : false,
      message : "Failed to retrieve note",
    })
  }
}

export const DeleteNote = async (req,res) => {
  try {
    const noteId = req.params.id;
    const deleteNote = await Notes.findByIdAndDelete(noteId);
    if(!deleteNote){
      return res.status(404).json({
        success : false,
        message : "Note not found",
      })
  }
  res.status(200).json({
    success : true,
    message : "Note deleted successfully",
  })
} 
   catch (error) {
    res.status(500).json({
      success : false,
      message : "Failed to delete note",
    })
  }
}


export const UpdataPinnedTask = async (req,res) => {
  try {
    const NoteId = req.params.id;
    const Note = await Notes.findById(NoteId);
    Note.isPinned = !Note.isPinned;
    await Note.save();
    res.status(200).json({
      success: true,
      message: "Pin status updated successfully",
      Note,
    });

  } catch (error) {
    res.status(500).json({
      success : false,
      message : "Failed to Update to Pin the tasks"
    })
  }
}

export const GetAllPinnedTasks = async (req,res) => {
  try {
    const getAllTasks = await Notes.find({isPinned : true});
    res.status(200).json({
      getAllTasks,
      success : true
    })
  } catch (error) {
    res.status(500).json({
      success : false,
      message : "Failed to get the pinned tasks"
    })
  }
}