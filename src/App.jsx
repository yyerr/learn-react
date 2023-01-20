import { IconBrandFacebook, IconBrandTwitter, IconBrandGoogle, IconBrandGithub } from '@tabler/icons';
import { useState } from 'react';
import ButtonCustom from './components/ButtonCustom';
import Card from './components/Card';
import InputCustom from './components/InputCustom';
import LearnUseRef from './components/LearnUseRef';
import LearnUseRef2 from './components/LearnUseRef2';
import PlaceContentCenter from './components/PlaceContentCenter';
import Todo from './components/Todo';

function App() {
  const [number, setNumber] = useState(5); /* nilai default 5 */

  function handleClick(props) {
    const nextNumber = number + parseInt(props);
    if (nextNumber >= 0) setNumber(number + props);
    console.log(number, nextNumber);
  }

  function handleClick2(props) {
    const nextNumber = (prevNumber) => prevNumber + parseInt(props); /* prevNumber adalah state sebelum re-render dari user */
    setNumber(nextNumber);
    console.log(number, nextNumber);
  }

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    password: '',
    hobi: '',
  });

  function f_changePasswordAndHobi(e) {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault(); //mencegah fungsi DOM default dari event tersebut. Cont: a href tidak akan jalan
    console.log(dataForm);
  }

  return (
    <div className='bg-blue-700 grid place-content-center min-h-screen'>

      <LearnUseRef2 />
      
      <Todo />

      <div>
        <Card>
          <Card.Title>Sign up for new account!</Card.Title>
          <form onSubmit={submitForm}>
            <Card.Body>
              <div className='mb-5 border rounded-lg p-4'>
                <p>Name : {dataForm.name || 'Not Set'}</p>
                <p>Email : {dataForm.email || 'Not Set'}</p>
                <p>Password : {dataForm.password || 'Not Set'}</p>
                <p>Hobi : {dataForm.hobi || 'Not Set'}</p>
              </div>
              <div className='mb-6'>
                <label htmlFor='name'>Name</label>
                <InputCustom value={dataForm.name} onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })} id='name' name='name' />
              </div>
              <div className='mb-6'>
                <label htmlFor='email'>Email</label>
                <InputCustom
                  value={dataForm.email}
                  onChange={(e) =>
                    setDataForm((dataForm) => ({
                      ...dataForm,
                      email: e.target.value,
                    }))
                  }
                  id='email'
                  name='email'
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='password'>Password</label>
                <InputCustom value={dataForm.password} onChange={f_changePasswordAndHobi} id='password' name='password' />
              </div>
              <div className='mb-6'>
                <label htmlFor='hobi'>Hobi</label>
                <InputCustom value={dataForm.hobi} onChange={f_changePasswordAndHobi} id='hobi' name='hobi' />
              </div>
            </Card.Body>
            <Card.Footer>
              <ButtonCustom className='bg-black'>
                <IconBrandGithub />
                Register
              </ButtonCustom>
            </Card.Footer>
          </form>
        </Card>
      </div>
      <div className='bg-slate-100'>
        <PlaceContentCenter>
          <div className='pr-10'>{number}</div>
          <ButtonCustom onClick={() => handleClick(+1)}>+1</ButtonCustom>
          <div className='pl-10'></div>
          <ButtonCustom
            onClick={() => {
              handleClick2(1), handleClick2(1);
            }}>
            +2
          </ButtonCustom>
          <div className='pl-10'></div>
          <ButtonCustom onClick={() => handleClick(-1)}>-1</ButtonCustom>
        </PlaceContentCenter>
      </div>
      <Title />
      <div className='flex gap-x-2'>
        <ButtonCustom className='bg-blue-500' onClick={() => console.log('Facebook')}>
          <IconBrandFacebook />
          Facebook
        </ButtonCustom>
        <ButtonCustom className='bg-sky-500' onClick={() => console.log('Twitter')}>
          <IconBrandTwitter />
          Twitter
        </ButtonCustom>
        <ButtonCustom
          {...{
            className: 'bg-green-500',
            type: 'button',
            onClick: () => console.log('Google'),
          }}>
          <IconBrandGoogle />
          Google
        </ButtonCustom>
        <ButtonCustom
          {...{
            className: 'bg-black',
            type: 'button',
            text: 'Github',
            onClick: () => console.log('Github'),
          }}>
          <IconBrandGithub /> /* tidak tampil karena ada props text*/
        </ButtonCustom>
      </div>
      <Title2 />
      <div className='bg-slate-500 antialiased flex items-center justify-center'>
        <div className='max-w-xl w-full flex items-center gap-2'>
          <Card>
            <Card.Title>This is Card Title!</Card.Title>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur ex voluptatem error nulla aut nostrum odio nemo ullam ratione
              reprehenderit aliquam voluptatum ducimus impedit, laudantium, accusantium optio facilis nesciunt necessitatibus labore nihil. Culpa
              inventore obcaecati eveniet iusto, id quia velit. Distinctio praesentium eos quod esse, iusto similique amet molestiae!
            </Card.Body>
            <Card.Footer>
              <ButtonCustom onClick={() => console.log('Card 1')}>Read Me!</ButtonCustom>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Title>This is Card Title 2!</Card.Title>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur ex voluptatem error nulla aut nostrum odio nemo ullam ratione
              reprehenderit aliquam voluptatum ducimus impedit, laudantium, accusantium optio facilis nesciunt necessitatibus labore nihil. Culpa
              inventore obcaecati eveniet iusto, id quia velit. Distinctio praesentium eos quod esse, iusto similique amet molestiae!
            </Card.Body>
            <Card.Footer>
              <ButtonCustom onClick={() => console.log('Card 2')}>Read Me!</ButtonCustom>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}

const Title = () => <h1>Hello World!</h1>;
const Title2 = () => (
  <>
    <h1>Hello World!</h1>
    <h1>Hello World 2!</h1>
  </>
);

export default App;
