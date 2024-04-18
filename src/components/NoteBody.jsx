import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ onAddItem, onDeleteItem, onArchived, activeNotes, archivedNotes }) {
    return (
        <div className="note-app__body">
            <NoteInput onAddItem={onAddItem} />
            <h2>Catatan Aktif</h2>
            {
                activeNotes.length !== 0 ? <NoteList notes={activeNotes} onDeleteItem={onDeleteItem} onArchived={onArchived} /> : <p className="notes-list__empty-message">Belum ada catatan</p>
            }
            <h2>Arsip</h2>
            {
                archivedNotes.length !== 0 ? <NoteList notes={archivedNotes} onDeleteItem={onDeleteItem} onArchived={onArchived} /> : <p className="notes-list__empty-message">Belum ada catatan</p>
            }
        </div>
    )
}

export default NoteBody;