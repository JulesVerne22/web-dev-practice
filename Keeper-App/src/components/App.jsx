import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = React.useState([]);

    function addNote(note){
        setNotes(prevnotes => {
            return [...prevnotes, note];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea
                addNote={addNote}
            />
            {notes.map((note, index) => (
                    <Note 
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        deleteNote={deleteNote}
                    />
                )
            )}
            <Footer />
        </div>
    );
}

export default App;