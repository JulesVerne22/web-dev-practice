import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = React.useState({title: "", content: ""});
    const [isExpanded, setIsExpanded] = React.useState(false);

    function expandForm() {
        setIsExpanded(true);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        props.addNote(note);
        setNote({title: "", content: ""});
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
                <textarea onClick={expandForm} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                {isExpanded && <Zoom in={isExpanded}>
                    <Fab onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>}
            </form>
        </div>
    );
}

export default CreateArea;