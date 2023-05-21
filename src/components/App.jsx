import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //Abhinav
  const [notes, setNotes] = useState([]);
<<<<<<< HEAD
  const [silky, setSilky] = useState('');  const [selfBagish,setSelfBagish]=useState('');
=======
  const [silky, setsilky] = useState('');
>>>>>>> f26e377 (silky's changes)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data != null) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
    <div className="container">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="item inner-container">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
      <Footer />
    </>
  );
}

export default App;
