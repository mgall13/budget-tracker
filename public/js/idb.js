// creating db connection
let db;

// creating connection to indexedDB
const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_transaction', { autoIncrement: true });
};

// on successful upgrade
request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {
        uploadTransaction();
    }
};

// on unsuccessful upgrade
request.onerror = function(event) {
    console.log(event.target.errorCode);
};