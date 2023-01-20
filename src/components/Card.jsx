function Card(props) {
  const { children } = props;
  return <div className='shadow rounded-lg overflow-hidden bg-slate-500'>{children}</div>;
}

function Title(props) {
  const { children } = props;
  return (
    <div className='p-4 border-b'>
      <h1 className='text-xl'>{children}</h1>
    </div>
  );
}

function Body(props) {
  const { children } = props;
  return <h1 className='leading-relaxed p-4'>{children}</h1>;
}

function Footer(props) {
  const { children } = props;
  return <h1 className='bg-slate-600 p-4'>{children}</h1>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
