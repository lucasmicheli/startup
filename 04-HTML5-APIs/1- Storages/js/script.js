// Exercise 1

const saveBtn = document.getElementById("btn-save");
const resetBtn = document.getElementById("btn-reset");
const textArea = document.getElementById("text-area");

/* Local Storage */

const localStorageSave = (key, value) =>{
    localStorage.setItem(key, value);
};

const localStorageReset = (key) =>{
    localStorage.removeItem(key);
};


/* IndexedDB */

let database;
let dbRequest = indexedDB.open('newdb', 1);

dbRequest.onerror = (event) => {
    console.log(`Database error: ` + event.target.errorCode);
};

dbRequest.onsuccess = (event) => {
    database = event.target.result;
};

dbRequest.onupgradeneeded = (event) => {
    database = event.target.result;
    database.createObjectStore('text-content',{autoIncrement: false});
};

const indexedDBSave = (key, value) => {
    let transact = database.transaction([key], "readwrite");
    let store = transact.objectStore(key);
    store.put(value, 'text-content');
}

const indexedDBClear = (key) => {
    let transact = database.transaction([key], "readwrite");
    let store = transact.objectStore(key);
    store.clear();
}

/* Local Storage & IndexedDB */

const saveText = () => {
    localStorageSave('text-content', textArea.value);
    indexedDBSave('text-content', textArea.value);
    textArea.value = '';
};

const resetText = () => {
    localStorageClear('text-content');
    indexedDBClear('text-content');
    textArea.value = '';
};


saveBtn.addEventListener("click", saveText);
resetBtn.addEventListener('click', resetText);