'use strict'

import storageService from './storageService.js'

export default {
    getNotes,
    deleteNote,
    addNote,
    getNoteById,
    editNote
};

let gNotes = storageService.load('notes') || createNotes();


console.log(gNotes)


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
        : gNotes.filter(note => note.name.includes(filterBy.lable)
            && note.numOfLegs === filterBy.numOfLegs);

    return Promise.resolve(notes)
}
function createNotes(notes) {
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
                url: "https://pbs.twimg.com/profile_images/1128816941718691840/kj7svD_2_400x400.jpg",
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
    storageService.store('notes', notes)
    return notes;
}





