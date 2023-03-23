import React from 'react';
import JokeForm from '../components/jokes/JokeForm.js'

const AddJoke = () => {
    const addJokeToJokes = (jokeData) => {
        console.log(jokeData);
    }
    return (
        <JokeForm onAddJoke={addJokeToJokes} />
    );
};

export default AddJoke;