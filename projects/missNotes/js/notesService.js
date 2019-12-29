'use strict'
<<<<<<< HEAD
import storageService from './storageService.js'
import Note from './Note.js'
import utils from "./utils.js"

let gNextId = 0;
let gNotes = [];
// let gCurrNote;

export default {
    editNote,
    getNoteById,
    addTextNote,
    deleteNote,
    getNotes,
    createNotes,
    PinToTop
};

loadNotes()
=======

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
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1


function editNote(id, name, imgUrl) {
    let editNote = gNotes.find(note => note.id === id)

    editNote = { ...editNote, name, imgUrl };

    // gNotes = gNotes.map(note=>  note);
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);

<<<<<<< HEAD
    saveNotes();
=======
    storageService.store('notes', gNotes)
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1

    return Promise.resolve(editNote)
}
function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)

    return Promise.resolve(note)
}
<<<<<<< HEAD
function addTextNote(type, txt, label, url, dodos, bgColor) {
    gNextId++;
    const newNote = new Note(gNextId, type, txt, label, url, dodos, bgColor)
    gNotes = [...gNotes, newNote]
    // console.log(gNotes)
    storageService.store('gNextId', gNextId);
    saveNotes()
    return Promise.resolve(gNotes)
}
// function addImageNote(name, imgURL) {
//     const newNote = new Note(type, txt, label, id)

//     gNotes = [...gNotes, newNote]

//     storageService.store('notes', gNotes)

//     return Promise.resolve(newNote)
// }

// function addTodoNote(name, imgURL) {
//     const newNote = new Note(type, txt, label, id)

//     gNotes = [...gNotes, newNote]

//     storageService.store('notes', gNotes)

//     return Promise.resolve(newNote)
// }
function deleteNote(noteId) {
    gNotes = gNotes.filter((currNote) => noteId !== currNote.id)
    storageService.store('notes', gNotes)
    gNextId--
    storageService.store('gNextId', gNextId)
    console.log(gNotes)
    return Promise.resolve(gNotes)
=======
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
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1
}
function getNotes(filterBy) {
    const notes = (!filterBy) ?
        [...gNotes]
<<<<<<< HEAD
        : gNotes.filter(note => note.name.includes(filterBy.lable));
    // && note.numOfLegs === filterBy.numOfLegs
=======
        : gNotes.filter(note => note.name.includes(filterBy.lable)
            && note.numOfLegs === filterBy.numOfLegs);
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1

    return Promise.resolve(notes)
}
function createNotes(notes) {
<<<<<<< HEAD

    var notes = [
        {
            id: gNextId++,
=======
    var notes = [
        {
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
<<<<<<< HEAD
            id: gNextId++,
=======
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1
            type: "NoteTodos",
            info: {
                label: "work on a project:",
                todos: [
                    { txt: "Do stuff", doneAt: null },
<<<<<<< HEAD
                    { txt: "Do it", doneAt: 18711461 },
                    { txt: "Do it 2", doneAt: 18711461 },
                    { txt: "Do it 3", doneAt: 18711461 },
                    { txt: "Do it 4", doneAt: 18711461 }
                ]
            }
        }, {
            id: gNextId++,
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "sfhwsrhsrhsrh g!"
            }
        },
        {
            id: gNextId++,
=======
                    { txt: "Do it", doneAt: 18711461 }
                ]
            }
        }, {
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "lskjdhlsakgh adlfkjaedflejkfnalkfn aldfandl fkaenflaekfn"
            }
<<<<<<< HEAD
        },
        {
            id: gNextId++,
=======
        }, {
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1
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
<<<<<<< HEAD
            id: gNextId++,
=======
>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1
            type: "NoteTodos",
            info: {
                label: "work on a project:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }
    ];
    storageService.store('notes', notes)
<<<<<<< HEAD
    storageService.store('gNextId', gNextId);
    return notes;
}
function PinToTop(noteId) {
    let note = getNoteById(noteId)
    note.isPinned = true;
    let idx = gNotes.findIndex(note => note.id === noteId)
    console.log(idx);
    gNotes = utils.arrayMove(gNotes, idx, 0);
    storageService.store('notes', gNotes)
    return Promise.resolve(gNotes)
}

function loadNotes() {
    gNotes = storageService.load('notes') || createNotes();
    gNextId = storageService.load('gNextId', 1) || 1
}
function saveNotes() {
    storageService.store('notes', gNotes);
}
function setCurrNote(note) {
    gCurrNote = note;
    // console.log('gCurrNote: ' + gCurrNote);
}

function saveImages(event) {
    var files = event.target.files;
    if (files && files[0]) {
        // console.log(files);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = function () {
                const img = new Image();

                img.onload = () => {
                    this.setState({ imageSrc: img.src })

                    note = getNoteById(noteId)
                    note.info.url = img.src
                }
                img.src = reader.result;
            };

            reader.readAsDataURL(file);
        }
    }
}
=======
    return notes;
}


>>>>>>> 09a09c5a486979cc88993b83433ec67c8b14deb1



