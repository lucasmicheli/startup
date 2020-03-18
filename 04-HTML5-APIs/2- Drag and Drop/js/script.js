// Exercise 2

const files = document.getElementById('files-area');

const removeData = (event) => {
    if (event.dataTransfer.items) {
        event.dataTransfer.items.clear();
    } else {
        event.dataTransfer.clearData();
    }
    console.log('Data removed.')
};

const listFiles = (file, list) => {
    const ul = document.createElement('ul');
    const fileName = document.createElement('li');
    const fileType = document.createElement('li');
    ul.setAttribute("class", "new-file");
    fileName.innerHTML = `File Name: ${file.name}`;
    fileType.innerHTML = `Type: ${file.type}`;
    ul.appendChild(fileName);
    ul.appendChild(fileType);
    list.appendChild(ul);
};

const drop = (event) => {
    console.log(`Something dropped here.`);
    event.preventDefault();
    const list = document.getElementById('list-files');
    const filesNumber = document.getElementById('files-number');

    if (event.dataTransfer.items) {
        filesNumber.innerHTML = event.dataTransfer.items.length;
        for(let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
                const file = event.dataTransfer.items[i].getAsFile();
                listFiles(file, list);
                console.log(`File ${i} Name: ${file.name}`);
            }
        }
    } else {
        filesNumber.innerHTML = event.dataTransfer.files.length;
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
            console.log(`File ${i} Name: ${event.dataTransfer.files[i].name}`);
            listFiles(event.dataTransfer.files[i], list);
        }
    } 
    removeData(event);
};

const dragOver = (event) => {
    console.log(`Something is about to drop here.`); 
    event.preventDefault();
};

files.addEventListener('drop', drop);
files.addEventListener('dragover', dragOver);
