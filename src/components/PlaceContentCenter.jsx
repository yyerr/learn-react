function PlaceContentCenter(props) {
  const { children } = props;
  return (
    <div className='bg-violet-900/20 p-4 flex items-center justify-center antialiased tracking-tight'>
      <div className='max-w-sm w-full text-red-500 flex items-center justify-center'>{children}</div>
    </div>
  );
}

export default PlaceContentCenter;
