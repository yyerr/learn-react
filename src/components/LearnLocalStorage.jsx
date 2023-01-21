import { useEffect, useState } from 'react';
import ButtonCustom from './ButtonCustom';
import Card from './Card';
import InputCustom from './InputCustom';

export default function LearnLocalStorage() {
    const [newTask, setNewTask] = useState('');
    //   const [tasks, setTasks] = useState([]);
    // Get Local Storage
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });

    // Local storage set item
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function f_addTask(e) {
        e.preventDefault();
        // console.log(Math.floor(Math.random() * Date.now()));

        if (newTask != '') {
            setTasks((prevTask) => [
                ...prevTask,
                {
                    id: Math.floor(Math.random() * Date.now()), //random number
                    name: newTask,
                    completed: false,
                },
            ]);
            setNewTask('');
        } else {
            console.log('Task tidak boleh kosong');
        }
    }

    function f_handleUpdateTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });

        setTasks(updateTask);
        // console.log(id);
    }

    function f_handleRemoveTask(id) {
        if (window.confirm('Yakin?')) {
            const removeTask = tasks.filter((task) => task.id !== id);
            setTasks(removeTask);
        }

        // console.log(id);
    }

    return (
        <div>
            <Card className='bg-white-500'>
                <Card.Title>Todo</Card.Title>
                <Card.Body></Card.Body>
                <form>
                    <div className='flex items-center gap-x-2'>
                        <InputCustom value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <ButtonCustom onClick={f_addTask} className='inline-flex justify-center whitespace-nowrap bg-black h-10' text='Add Task' />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className='space-y-2 m-2'>
                        {tasks.map((task) => (
                            <li key={task.id} className='flex items-center justify-between'>
                                <span>
                                    {task.name} {task.completed ? 'o' : 'x'}
                                </span>
                                <div>
                                    <button onClick={() => f_handleUpdateTask(task.id)} className='m-1 px-2 py-1 border text-xs'>
                                        Mark as {task.completed ? 'x' : 'o'}
                                    </button>
                                    <button onClick={() => f_handleRemoveTask(task.id)} className='m-1 px-2 py-1 border text-xs'>
                                        delete
                                    </button>
                                </div>
                            </li>
                        ))}{' '}
                    </ol>
                ) : null}
                <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
            </Card>
        </div>
    );
}
