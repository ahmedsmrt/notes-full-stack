import { NoteContext } from "../context/NoteContext";
import { useContext } from "react";

export const useNotesContext = () => {
    const context = useContext(NoteContext)

    if(!context) {
        throw Error('UseNotesContext must be used in a NoteContextProvider')
    }

    return context;
}