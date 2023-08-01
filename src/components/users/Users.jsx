import { useEffect, useState } from 'react';
import './users.css';
import axios from 'axios';

import CustomModal from '../modal/CustomModal';


const Users = (props) => {

    const {query,loadOff} = props;
    const [users,setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedUser,setSelectedUser] = useState({});
    const handleOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

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
    },[users]);

    const userData =<div className='userdata'>
        <h3 className='bg-primary modal-heading'>User Details</h3>
        <p>Name: {selectedUser?.name}</p>
        <p>Username: {selectedUser?.username}</p>
        <p>Email: {selectedUser?.email}</p>
        <h3 className='bg-primary modal-heading'>Address</h3>
        <p>Street: {selectedUser?.address?.street}</p>
        <p>Suite: {selectedUser?.address?.suite}</p>
        <p>City: {selectedUser?.address?.city}</p>
        <p>Zipcode: {selectedUser?.address?.zipcode}</p>
        <p>Phone: {selectedUser?.phone}</p>
        <p>Website: {selectedUser?.website}</p>
        <h3 className='bg-primary modal-heading'>Company</h3>
        <p>Company Name: {selectedUser?.company?.name}</p>
        <p>Catch Phrase: {selectedUser?.company?.catchPhrase}</p>
        <p>BS: {selectedUser?.company?.bs}</p>
    </div>;

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
                    {users && users.map(user=><tr key={user.id} className='user' onClick={()=>handleOpen(user)}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>)}
                </tbody>
            </table>
            {/* <button onClick={handleOpen}>Open modal</button> */}
            <CustomModal open={open} handleClose={handleClose} content={userData}></CustomModal>
        </div>
    );
};

export default Users;