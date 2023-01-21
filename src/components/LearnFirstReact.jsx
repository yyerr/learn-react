import ButtonCustom from './ButtonCustom';
import PlaceContentCenter from './PlaceContentCenter';
import { useState } from 'react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandGoogle, IconBrandGithub } from '@tabler/icons';
import Card from './Card';

export default function LearnFirstReact() {
    const Title = () => <h1>Hello World!</h1>;
    const Title2 = () => (
        <>
            <h1>Hello World!</h1>
            <h1>Hello World 2!</h1>
        </>
    );

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

    return (
        <div>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur ex voluptatem error nulla aut nostrum odio nemo
                            ullam ratione reprehenderit aliquam voluptatum ducimus impedit, laudantium, accusantium optio facilis nesciunt
                            necessitatibus labore nihil. Culpa inventore obcaecati eveniet iusto, id quia velit. Distinctio praesentium eos quod esse,
                            iusto similique amet molestiae!
                        </Card.Body>
                        <Card.Footer>
                            <ButtonCustom onClick={() => console.log('Card 1')}>Read Me!</ButtonCustom>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Title>This is Card Title 2!</Card.Title>
                        <Card.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur ex voluptatem error nulla aut nostrum odio nemo
                            ullam ratione reprehenderit aliquam voluptatum ducimus impedit, laudantium, accusantium optio facilis nesciunt
                            necessitatibus labore nihil. Culpa inventore obcaecati eveniet iusto, id quia velit. Distinctio praesentium eos quod esse,
                            iusto similique amet molestiae!
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
