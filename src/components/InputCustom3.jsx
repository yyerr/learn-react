import { useEffect, useRef } from 'react';

const InputCustom3 = ({ isFocused = false, type = 'text', ...props }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      {...props}
      className='w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
      type={type}
    />
  );
};

export default InputCustom3;
