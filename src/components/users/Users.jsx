import { useEffect } from 'react';
import './users.css';
import axios from 'axios';

const Users = () => {

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div className="users-section">
            users
        </div>
    );
};

export default Users;