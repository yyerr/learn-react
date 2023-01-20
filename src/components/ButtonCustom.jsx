import clsx from 'clsx';

function ButtonCustom(props) {
  const { children, text, className = 'bg-blue-500', type = 'button' } = props;
  return (
    <button {...props} className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 text-white px-4 py-2 rounded flex item-center gap-x-2')}>
      {text || children}
    </button>
  );
}

export default ButtonCustom;
