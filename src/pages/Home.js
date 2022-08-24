import React, { useEffect } from 'react'
import { useNotesContext } from '../hooks/useNotesContext';
import { useAuthContext } from '../hooks/useAuthContext';


// Components
import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';


const API_URI = 'https://nuance-notes-server.herokuapp.com'

function Home() {
    const {notes, dispatch } = useNotesContext();
    const {user} = useAuthContext();

    useEffect(()=> {
        const fetchNotes = async () => {
            const response = await fetch(`${API_URI}/api/notes`, {
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_NOTES', payload: json})
            }
        }

        if(user) {
            fetchNotes();
        }
    }, [dispatch, user]);

    

  return (
    <div className="home">
        <NoteForm />
        <div className="notes">
        {notes && notes.map((note)=> (
            <NoteDetails key={notes.id} note={note}/>
        ))}
        </div>
    </div>
  )
}

export default Home