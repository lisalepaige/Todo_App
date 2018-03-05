class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    newNote.classList.add('card');
    let NoteP = document.createElement('p');
    NoteP.innerHTML = title;
    newNote.appendChild(NoteP);


    let NoteA = document.createElement('a');
    NoteA.innerHTML = "Remove";
    NoteA.href = "#";
    NoteA.classList.add('card-remove');
    newNote.appendChild(NoteA);

    let notes = document.querySelector(".notes");
    notes.appendChild(newNote);
    console.log("testtest");
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    
    console.log("addedDiv");
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    this.btnAdd = btnAddNote;
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    console.log("button");
        // this function should create a new note by using the Note() class

        let textvalue = document.getElementById("txtAddNote").value;
        console.log("textvalue");
        new Note(textvalue);
        this.reset();
    
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.getElementById("AddNotes").reset();
    console.log("reset");
  }
  
}

let app = new App();