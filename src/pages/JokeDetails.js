import React, { Fragment } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
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
    const routeMatch = useRouteMatch();
    console.log(routeMatch);
    const params = useParams();
    const currentJoke = DUMMY_JOKES.find(item => item.id === params.jokeId);
    return (
        <div>
            {!currentJoke && <h1 className='centered'>Шутка не найдена</h1>}
            {currentJoke && <Fragment> <HighlightedJoke text={currentJoke.text} topic={currentJoke.topic} />
                <Route path={routeMatch.path} exact>
                    <div className='centered'><Link className='btn--empty' to={`${routeMatch.url}/comments`}>Show comments</Link></div>
                </Route>
                <Route path={`${routeMatch.path}/comments`}>
                    <Comments />
                </Route>
            </Fragment>}
        </div>
    );
};

export default JokeDetails;