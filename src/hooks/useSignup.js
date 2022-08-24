import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


const API_URI = "https://nuance-notes-server.herokuapp.com";


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isloading, setIsLoading] = useState(null) 
    const {dispatch} = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${API_URI}/api/user/signup`, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error)
        }
        if(response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the authcontext
            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
        }
    }

    return { signup, isloading, error}
}