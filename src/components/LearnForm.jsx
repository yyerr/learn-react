import { useState } from "react";
import ButtonCustom from "./ButtonCustom";
import Card from "./Card";
import InputCustom from "./InputCustom";
import { IconBrandGithub } from '@tabler/icons';

export default function LearnForm() {
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
                                <InputCustom
                                    value={dataForm.name}
                                    onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })}
                                    id='name'
                                    name='name'
                                />
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
    )
}