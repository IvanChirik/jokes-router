import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments.js'
import HighlightedJoke from '../components/jokes/HighlightedJoke.js';

const DUMMY_JOKES = [
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

];
const JokeDetails = () => {
    const params = useParams();
    const currentJoke = DUMMY_JOKES.find(item => item.id === params.jokeId);
    return (
        <div>
            {!currentJoke && <h1 className='centered'>Шутка не найдена</h1>}
            {currentJoke && <HighlightedJoke text={currentJoke.text} topic={currentJoke.topic} />}
            <Route path='/jokes/:jokeId/comments'>
                <Comments />
            </Route>
        </div>
    );
};

export default JokeDetails;