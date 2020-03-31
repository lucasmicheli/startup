// Exercise 2

const filesArea = document.getElementsByClassName('files-area')[0];
const fileData = document.getElementsByClassName('file-content')[0];

const fileDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const files = event.dataTransfer.files;
    for (let i of files) {
        if (i.type == "text/plain") {
            const readFile = new FileReader();
            readFile.readAsText(i);
            readFile.onload = (event) => {
                fileData.innerHTML = `File: "${i.name}" - Type: ${i.type} - Content: ${event.target.result}`;
            }
        } else {
            fileData.innerHTML = `Sorry, only .txt files for now.`;
        }
    }
};

const dragOver = (event) => { 
    event.stopPropagation();
    event.preventDefault();
};

filesArea.addEventListener('drop', fileDrop);
filesArea.addEventListener('dragover', dragOver);
