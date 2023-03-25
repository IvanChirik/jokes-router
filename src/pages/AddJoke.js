import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import JokeForm from '../components/jokes/JokeForm.js';
import useHttp from '../hooks/use-http.js';
import { addJoke } from '../utils/firebase-api.js';

const AddJoke = () => {
    const history = useHistory();
    const { sendHttpRequest, status } = useHttp(addJoke);
    useEffect(() => {
        if (status === 'completed') {
            history.replace('/jokes');
        }
    }, [status, history])
    const addJokeToJokes = (jokeData) => {
        sendHttpRequest(jokeData);
    }
    return (
        <JokeForm isLoading={status === 'pending'} onAddJoke={addJokeToJokes} />
    );
};

export default AddJoke;