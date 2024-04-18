import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ notes, onDeleteItem, onArchived }) {
    return (
        <div className="note-item">
            <NoteItemContent notes={notes} />
            <NoteItemAction notes={notes} onDeleteItem={onDeleteItem} onArchived={onArchived} />
        </div>
    )
}

export default NoteItem;