import React from "react";
import { useNotesContext } from "../hooks/useNotesContext";
import { useAuthContext } from '../hooks/useAuthContext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const API_URI = "https://nuance-notes-server.herokuapp.com";

export default function NoteDetails({ note }) {
  const { dispatch} = useNotesContext();
  const {user} = useAuthContext();

  if(!user ) {
    return 
  }

  const handleClick = async () => {
    const response = await fetch(`${API_URI}/api/notes/${note._id}`, {
      method: "DELETE",
      headers: {
        'Authorization' : `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
        dispatch({type: 'DELETE_NOTE', payload: json})
    }
  };

  return (
    <div className="note-details">
      <h4>{note.primaryEmotion}</h4>
      <p>
        <strong>Content: </strong>
        {note.message}
      </p>
      <p>{`Created ${formatDistanceToNow(new Date(note.createdAt), {addSuffix: true})}`}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
}
