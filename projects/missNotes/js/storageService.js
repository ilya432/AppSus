'use strict'

function store(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

function load(key, defaultValue) {
    var str = localStorage.getItem(key);
    return str ? JSON.parse(str) : defaultValue
}

export default {
    saveToStorage,
    loadFromStorage
}