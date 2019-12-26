// 'use strict'

export default class Note {

    constructor(type, txt, label) {
        this.id = getRandomID();
        this.type = type;
        this.info = {
            txt: txt,
            url: url,
            label: label,
            // todos: [
            //     { txt: "Do that", doneAt: null },
            //     { txt: "Do this", doneAt: 187111111 }
            // ]
        };
        this.style = {
            background: background
        }
        this.isPinned = false;

    }
}


