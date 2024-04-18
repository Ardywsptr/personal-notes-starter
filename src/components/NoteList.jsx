import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteItem, onArchived }) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem notes={note} key={note.id} onDeleteItem={onDeleteItem} onArchived={onArchived} />
                ))
            }
        </div>
    )
}

export default NoteList;