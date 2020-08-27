import React, { useEffect, useState } from 'react';
import "./api_test.css";
import '../../App.css';

const ApiTest = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [movies, setMovies] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        let url = "https://the-one-api.dev/v2/";

        fetch(url + "movie", {
            headers: {
                Authorization: "Bearer qKZVHO7KkYCetHPtn2YA"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMovies(result.docs);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

            )
        fetch(url + "book")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBooks(result.docs);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

            )

    }, [])
    if (error) { return <div> Error: {error.message}</div> }
    else if (!isLoaded) { return <div>Loading...</div> }
    else return (
        <div>
            <h1>"The <b>ONE</b> API" test (https://the-one-api.dev/)</h1>
            <h2>LOTR Films</h2>
            {movies.map(m =>
                <div className="list" key={m._id}>
                    <p>{m.name}</p>
                </div>
            )}
            <h2>LOTR Books</h2>
            {books.map(b =>
                <div className="list" key={b._id}>
                    <p>{b.name}</p>
                </div>
            )}
        </div>
    )

}

export default ApiTest