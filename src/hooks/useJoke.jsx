
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useJoke(name) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            const resJoke = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
            setJoke(resJoke.data);
            // console.log(resJoke.data);
        };

        getJoke().then((r) => r);
    }, [name]);

    return joke;
}
