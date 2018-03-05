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
    //console.log("testtest");
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    //
    document.querySelector(".notes").appendChild(this.element);
    console.log("addedDiv");
  }
  
  saveToStorage(textvalue){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    saveNotes.push(textvalue);
    localStorage.setItem('notes', JSON.stringify(saveNotes));
    console.log("save");
  
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element



  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    this.btnAdd = document.getElementById("btnAddNote");
    this.enterText = document.getElementById("txtAddNote");
    let enter = this.btnAdd;
    this.enterText.addEventListener("keyup", function(event)
    {
      event.preventDefault();

      if (event.keyCode === 13) {
        enter.click();
        console.log("enter");
      }
    });
    

    this.btnAdd.addEventListener("click", this.createNote.bind(this));

    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    let loadNotes = JSON.parse(localStorage.getItem('notes'));

    if( loadNotes !== null) 
    {
      loadNotes.forEach(textvalue => {

      let note = new Note(textvalue);
      note.add();
      //console.log("not empty");
      });
    }


  }
   
  createNote(e){
    //console.log("button");
        // this function should create a new note by using the Note() class

        let textvalue = document.getElementById("txtAddNote").value;
        //console.log("textvalue");
        let note = new Note(textvalue);
        note.saveToStorage(textvalue);
        note.add();
        this.reset();
    
  }
  
  reset(){
    // this function should reset the form 
    document.getElementById("AddNotes").reset();
    //console.log("reset");
  }
  
}

let app = new App();

let saveNotes = [];
saveNotes = JSON.parse(localStorage.getItem('notes'));
console.log(saveNotes);