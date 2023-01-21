import { useEffect, useState } from 'react';
import ButtonCustom from './ButtonCustom';
import Card from './Card';
import InputCustom from './InputCustom';

export default function LearnUseEffect() {
    const [name, setName] = useState('');
    const [online, setOnline] = useState(false);
    const [scrollPos, setScrollPos] = useState(window.scroll);

    useEffect(() => {
        // console.log('render selalu'); //akan selalu jalan ketika re-render
    });

    useEffect(() => {
        // console.log('render pertama'); //hanya jalan ketika render pertama []
    }, []);

    useEffect(() => {
        // console.log(`render ${online ? 'Online' : 'Offline'}`); //hanya jalan ketika state berubah []
    }, [online]);

    function updateScrollPos() {
        const windowScrolling = window.scrollY;
        console.log(`Window scroll pos : ${windowScrolling}`);
        setScrollPos(windowScrolling);
    }
    //componentWillUnmount
    //   useEffect(() => {
    //     window.addEventListener('scroll', updateScrollPos);
    //     return () => {
    //       window.removeEventListener('scroll', updateScrollPos);
    //     };
    //   });

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPos);
        window.addEventListener('keydown', function (e) {
            console.log(e.code);
        });
    }, []);

    return (
        <Card>
            <Card.Title>useEffect</Card.Title>
            <Card.Body>
                <InputCustom className='border border-slate-500' value={name} onChange={(e) => setName(e.target.value)} />
                {/* <ButtonCustom onClick={() => setOnline((online) => !online)}>Set Online</ButtonCustom> */}
            </Card.Body>
        </Card>
    );
}
