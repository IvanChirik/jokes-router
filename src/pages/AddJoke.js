import React from 'react';
import { useHistory } from 'react-router-dom';
import JokeForm from '../components/jokes/JokeForm.js'

const AddJoke = () => {
    const history = useHistory();
    const addJokeToJokes = (jokeData) => {
        console.log(jokeData);
        history.replace('/jokes');
    }
    return (
        <JokeForm onAddJoke={addJokeToJokes} />
    );
};

export default AddJoke;