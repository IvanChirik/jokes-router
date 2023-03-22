import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments.js'

const JokeDetails = () => {
    const params = useParams();
    return (
        <div>
            <h1>Jokes Details</h1>
            <p>{params.jokeId}</p>
            <Route path='/jokes/:jokeId/comments'>
                <Comments />
            </Route>
        </div>
    );
};

export default JokeDetails;