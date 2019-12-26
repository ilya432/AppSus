'use strict'

import storageService from './storageService.js'

export default {
    getNotes,
    deleteNote,
    addNote,
    getNoteById,
    editNote
};
var notes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];
let gNotes = storageService.load('notes') || createNotes(notes);


console.log(notes)


function editNote(id, name, imgUrl) {
    let editNote = gNotes.find(note => note.id === id)

    editNote = { ...editNote, name, imgUrl };

    // gNotes = gNotes.map(note=>  note);
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);

    storageService.store('notes', gNotes)

    return Promise.resolve(editNote)
}
function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)

    return Promise.resolve(note)
}
function addNote(name, imgURL) {
    const newNote = new Note(name, imgURL, 'kjgkj')
    gNotes = [...gNotes, newNote]
    storageService.store('notes', gNotes)

    return Promise.resolve(newNote)
}
function deleteNote(note) {
    gNotes = gNotes.filter((currNote) => currNote.id !== note.id)
    storageService.store('notes', gNotes)
    return Promise.resolve(true)
}
function getNotes(filterBy) {
    const notes = (!filterBy) ?
        [...gNotes]
        : gNotes.filter(note => note.name.includes(filterBy.lable));
    // && note.numOfLegs === filterBy.numOfLegs);

    return Promise.resolve(notes)
}
function createNotes(notes) {
    storageService.store('notes', notes)
    return notes;
}





