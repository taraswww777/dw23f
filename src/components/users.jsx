import React, { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [cols, setCols] = useState(['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', '']);
    const numberOfUsersForParty = users.length;


    const renderCols = () => {
        return cols.map(col => (
            <th scope = 'col' key = {col}>{col}</th>
        ));
    };

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(position => position._id !== userId));
    };


    const renderPhrase = (number) => {
        return number !== 0 ? <span className='badge m-2 bg-primary'><h2>{number} человек тусанет с тобой</h2></span> 
            : <span className='badge m-2 bg-danger'><h2>Никто не тусанет с тобой</h2></span>

    };

    return (
        <>
            {renderPhrase(numberOfUsersForParty)}
            <table className="table">
                <thead>
                <tr>
                    {renderCols()}
                </tr>
                </thead>
                <tbody>
                {users.map(user => 
                        <tr key = {user._id}>
                            <td>{user.name}</td>
                            <td>{user.qualities.map(qualitiesName => 
                                <span className = {'m-1 badge bg-' + qualitiesName.color} key = {qualitiesName._id}>{qualitiesName.name}</span>)}</td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}</td>
                            <td><button className='btn'>
                                <span className='p-3 badge bg-danger' onClick={() => handleDelete(user._id)}>Delete</span>
                                </button>
                            </td>
                        </tr>)}
                        
                </tbody>
            </table>
        </>
    )
};

export default Users;