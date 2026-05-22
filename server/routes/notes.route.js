const express = require('express');
const { CreateNotes, getAllNotes, UpdateNotes, DeleteNote, getNode, UpdataPinnedTask, GetAllPinnedTasks } = require('../controllors/notes.controller');
const router = express.Router();

router.post('/create-notes',CreateNotes);
router.get('/getallNotes',getAllNotes);
router.put('/update-notes/:id',UpdateNotes);
router.delete('/delete-notes/:id',DeleteNote);
router.get('/get-note/:id',getNode)
router.put('/Update-Pintask/:id',UpdataPinnedTask);
router.get('/getallPinnedNotes',GetAllPinnedTasks);

module.exports = router;
