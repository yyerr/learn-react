import { useRef, useState } from 'react';
import ButtonCustom from './ButtonCustom';
import Card from './Card';

export default function LearnUseRef() {
    const tick = useRef(0); // event digunakan ketika tidak dibutuhkan render pada components
    //   const [tick, setTick] = useState(0);

    function handleClick() {
        tick.current = tick.current + 1;
        console.log(tick.current);
        // const nextTick = tick + 1;
        // setTick(nextTick);
        // console.log(nextTick);
    }

    return (
        <Card>
            <Card.Title>useRef Hooks</Card.Title>
            <Card.Body>
                <ButtonCustom onClick={handleClick}>Tick</ButtonCustom>
            </Card.Body>
            <Card.Footer>You clicked {tick.current} times.</Card.Footer>
        </Card>
    );
}
