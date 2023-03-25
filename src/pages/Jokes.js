import React, { useEffect } from 'react';
import JokeList from '../components/jokes/JokeList.js';
import Loader from '../components/UI/Loader.js';
import useHttp from '../hooks/use-http.js';
import { getJokes } from '../utils/firebase-api.js';
import NoJokesFound from '../components/jokes/NoJokesFound.js';

/*const DUMMY_JOKES = [
    {
        id: 'j1',
        topic: 'Programming',
        text: 'How many programmers does it take to change a light bulb? None - It`s a hardware problem',
    },
    {
        id: 'j2',
        topic: 'General',
        text: 'How many bones are in the human hand? A handful of them.',
    },

];*/
const Jokes = () => {
    const { sendHttpRequest, status, error, data: loadedJokes } = useHttp(getJokes, true);
    useEffect(() => {
        sendHttpRequest()
    }, [sendHttpRequest]);
    if (status === 'pending') {
        return <div className='centered'>
            <Loader />
        </div>
    }
    if (error) {
        return <div className='centered focused'>{error}</div>
    }
    if (status === 'completed' && (!loadedJokes || loadedJokes.length === 0)) {
        return <NoJokesFound />
    }
    return (
        <JokeList jokes={loadedJokes} />
    );
};

export default Jokes;