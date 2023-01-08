import React from 'react';
import { Form, Shortener } from './Shortener';
 
const Home = () => {
    const [shorterned, setShorterned] = React.useState([]);

    return (
        <div>
            <h1>Enter a url</h1>
            <Form setShorterned={setShorterned} />
            <Shortener shorterned={shorterned} setShorterned={setShorterned} />
        </div>
    );
};



export default Home;
