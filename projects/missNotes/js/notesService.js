'use strict'
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


function editNote(id, name, imgUrl) {
    let editNote = gNotes.find(note => note.id === id)

    editNote = { ...editNote, name, imgUrl };

    // gNotes = gNotes.map(note=>  note);
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);

    saveNotes();

    return Promise.resolve(editNote)
}
function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)

    return Promise.resolve(note)
}
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
}
function getNotes(filterBy) {
    const notes = (!filterBy) ?
        [...gNotes]
        : gNotes.filter(note => note.name.includes(filterBy.lable));
    // && note.numOfLegs === filterBy.numOfLegs

    return Promise.resolve(notes)
}
function createNotes(notes) {

    var notes = [
        {
            id: gNextId++,
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: gNextId++,
            type: "NoteTodos",
            info: {
                label: "work on a project:",
                todos: [
                    { txt: "Do stuff", doneAt: null },
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
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "lskjdhlsakgh adlfkjaedflejkfnalkfn aldfandl fkaenflaekfn"
            }
        },
        {
            id: gNextId++,
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
            id: gNextId++,
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



