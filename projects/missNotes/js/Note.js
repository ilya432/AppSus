// 'use strict'

export default class Note {
    // static nextId = 1;
    constructor(id, type, txt, label, url, todos, background) {
        this.id = id;
        this.type = type;
        this.isPinned = false;
        this.info = {
            label: label,
            txt: txt,
            url: url,
            todos: todos
        };
        this.style = {
            background: background
        }
    }
}

// [
//     { txt: "Do that", doneAt: null },
//     { txt: "Do this", doneAt: 187111111 }
// ]


