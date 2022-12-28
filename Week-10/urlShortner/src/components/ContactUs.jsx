import React from 'react';
import './Style.css';

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


const Shortener = ({ shorterned, setShorterned }) => {

    return (
        <>
            {shorterned.length > 0 && (
                <div className='shortenedList'>
                    <h2>Shortende</h2>
                    <ul>
                        {shorterned.map((todo, index) => (
                            <li key={index}>
                                
                                {todo.original_link}
                                <a href={todo.full_short_link} target="_blank" >{todo.full_short_link}</a>
                                </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

const Form = ({ setShorterned }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = e.target[0].value;
        if(url === "") return alert("Please enter a url to shorten");


        fetch('https://api.shrtco.de/v2/shorten?url='+url)
            .then(async (response) => {
                console.log("response.json()" );
                const res = await response.json()
                console.log(res);
                if (!res.ok) {
                    return Promise.reject(res.error);
                }else{

                    const result  = {
                        original_link: res.result.original_link,
                        full_short_link: res.result.full_short_link
                    }

                    setShorterned((prev) => [...prev, result]);
                }
                //e.target[0].value = ""

            });

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className='createShortener' placeholder='Please enter a url to shorten' />
            </form>
        </>
    );
};




export default Home;
