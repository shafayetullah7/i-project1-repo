import { useEffect, useState } from 'react';
import './users.css';
import axios from 'axios';

const Users = (props) => {

    const {query,loadOff} = props;
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        console.log('query:',props.query);
        if(!query){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                setUsers(res.data);
                loadOff();
            })
            .catch(err=>{
                console.log(err);
                loadOff();
            })
        }
        else{
            axios.get(`https://jsonplaceholder.typicode.com/users?email=${query}`)
            .then(res=>{
                if(res.data.length>0){
                    console.log(res);
                    setUsers(res.data)
                    loadOff();
                }
                else{
                    axios.get(`https://jsonplaceholder.typicode.com/users?username=${query}`)
                    .then(res=>{
                        // console.log(res);
                        if(res.data.length>0){
                            setUsers(res.data)
                            loadOff();
                        }
                        else{
                            axios.get(`https://jsonplaceholder.typicode.com/users?name=${query}`)
                            .then(res=>{
                                if(res)setUsers(res.data)
                                loadOff();
                            })
                            .catch(err=>{
                                loadOff();
                                console.log(err);
                            })
                        }
                    })
                    .catch(err=>{
                        loadOff();
                        console.log(err);
                    })
                }
            })
            .catch(err=>{
                loadOff();
                console.log(err);
            })
            console.log('query:',query);
            
        }
    },[props]);

    useEffect(()=>{
        console.log(users);
    },[users])

    return (
        <div className="users-section">
            <table className='user-table'>
                <thead>
                    <tr className='user-table-heading'>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                
                <tbody>
                    {users && users.map(user=><tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Users;