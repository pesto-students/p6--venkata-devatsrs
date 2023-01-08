import React from 'react';
import './Style.css';
import logo from '../logo.svg';

export const Shortener = ({ shorterned, setShorterned }) => {

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

export const Form = ({ setShorterned }) => {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

	const isValidUrl = urlString => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = e.target[0].value;
        console.log(url);
        setError("");
        if(url === "") return setError("Please enter a url to shorten");

        if(!isValidUrl(url)) return setError("Please enter a valid url to shorten");

        setLoading(true);
        fetch('https://api.shrtco.de/v2/shorten?url='+url)
            .then(async (response) => {
                console.log("response.json()" );
                const res = await response.json()
                console.log(res);
                setLoading(false);
                if (!res.ok) {
                    return Promise.reject(res.error);
                }else{

                    const result  = {
                        original_link: url,
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

                {loading ? <img src={logo} className="loader" alt="logo" width={100} /> : '' }
                {error && error }
            </form>
        </>
    );
};




