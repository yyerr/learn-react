import { useRef } from 'react';
import ButtonCustom from './ButtonCustom';
import Card from './Card';
import InputCustom from './InputCustom';
import InputCustom2 from './InputCustom2';
import InputCustom3 from './InputCustom3';

export default function LearnUseRef2() {
  const inputRef = useRef(0);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <Card>
      <Card.Title>useRef Hooks</Card.Title>
      <Card.Body>
        {/* <InputCustom className='border border-slate-500' ref={inputRef} /> */}
        {/* <InputCustom2 className='border border-slate-500' ref={inputRef} /> focus menggunakan forwardRef */}
        <InputCustom3 isFocused className='border border-slate-500'/> {/* focus menggunakan state */}
        {/* <ButtonCustom onClick={handleClick}>Tick</ButtonCustom> */}
      </Card.Body>
      {/* <Card.Footer>You clicked {tick.current} times.</Card.Footer> */}
    </Card>
  );
}
