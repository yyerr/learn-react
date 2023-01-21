import { useEffect, useState } from 'react';
import ButtonCustom from './ButtonCustom';
import Card from './Card';
import axios from 'axios';

export default function LearnAjaxApi() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // tanpa axios
    //   async function getUsers() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = response.json();
    //     console.log(data);
    //   }

    // dengan axios
    async function getUsers() {
        setLoading(true);
        try {
            const dataUser = await axios('https://jsonplaceholder.typicode.com/users');
            setUsers(dataUser.data);
            setLoading(false);
        } catch (e) {
            console.log('Error cuk!');
            setLoading(false);
        }

        // console.log(dataUser.data);
    }

    return (
        <div>
            <Card>
                <Card.Title>Users : {users.length}</Card.Title>
                <Card.Body>
                    {loading ? <div>Loading...</div> : ''}
                    {users.length ? (
                        <ol>
                            {users.map((user) => (
                                <li key={user.id}>
                                    {user.name} ({user.username})
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p>Tidak ada ada user.</p>
                    )}
                </Card.Body>
                <Card.Footer>
                    <ButtonCustom onClick={getUsers}>Get User</ButtonCustom>
                </Card.Footer>
            </Card>
        </div>
    );
}
