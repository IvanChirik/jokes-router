import React, { Fragment, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments.js'
import HighlightedJoke from '../components/jokes/HighlightedJoke.js';
import useHttp from '../hooks/use-http.js';
import { getJoke } from '../utils/firebase-api.js';
import Loader from '../components/UI/Loader.js';

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
const JokeDetails = () => {
    const routeMatch = useRouteMatch();
    const params = useParams();
    const { jokeId } = params;
    const { sendHttpRequest, status, data: loadedJoke, error } = useHttp(getJoke, true);
    useEffect(() => {
        sendHttpRequest(jokeId);
    }, [sendHttpRequest, jokeId]);
    if (status === 'pending') {
        return <div className='centered'>
            <Loader />
        </div>
    }
    if (error) {
        return <div className='centered'>{error}</div>
    }
    return (
        <div>
            {!loadedJoke.text && <h1 className='centered'>Шутка не найдена</h1>}
            {loadedJoke && <Fragment> <HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />
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