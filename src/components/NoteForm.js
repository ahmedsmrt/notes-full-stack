import React, { useState } from "react";
import { useNotesContext } from '../hooks/useNotesContext';
import { useAuthContext } from '../hooks/useAuthContext';
import PrimaryEmotions from "./PrimaryEmotions";


const NoteForm = () => {
  const {dispatch} = useNotesContext()  
  const [primaryEmotion, setPrimaryEmotion] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([])
  const {user} = useAuthContext();


  const API_URI = "https://nuance-notes-server.herokuapp.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user) {
      setError('You must be logged in.');
      return
    }

    const note = { primaryEmotion, message };

    const response = await fetch(`${API_URI}/api/notes`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
        'Authorization' : `Bearer ${user.token}`
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setPrimaryEmotion("");
      setMessage("");
      setError(null);
      setEmptyFields([])
      console.log("New note added!", json);
      dispatch({type: 'CREATE_NOTE', payload: json})
    }
  };

  return (
    <div>
      <PrimaryEmotions />
      <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Note</h3>
      <label>Title</label>
      <input
        type="text"
        onChange={(e) => setPrimaryEmotion(e.target.value)}
        value={primaryEmotion}
        placeholder=""
        className={emptyFields.includes('primaryEmotion') ? 'error' : ''}
      />
      <label>How are you feeling today?</label>
      <textarea
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className={emptyFields.includes('message') ? 'error' : ''}
      />
      <button>Add Nuanced Note</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
};

export default NoteForm;
