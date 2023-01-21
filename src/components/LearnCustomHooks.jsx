import { useRef, useState } from 'react';
import useJoke from '../hooks/useJoke';
import ButtonCustom from './ButtonCustom';
import Card from './Card';
import InputCustom4 from './InputCustom4';
import PlaceContentCenter from './PlaceContentCenter';

export default function LearnCustomHooks() {
    const nameRef = useRef()
    const [name, setName] = useState('Rehan')
    const joke = useJoke(name)
    const generateJoke = (e)=>{
        e.preventDefault()
        setName(nameRef.current.value)
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Playground</Card.Title>
                <Card.Body>
                    <p className='mb-4'>
                    {joke.value}
                    </p>
                    <InputCustom4 ref={nameRef}/>
                </Card.Body>
                <Card.Footer>
                    <ButtonCustom onClick={generateJoke}>Generate a Joke</ButtonCustom>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
