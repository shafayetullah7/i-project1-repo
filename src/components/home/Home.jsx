import './home.css'
import { TfiReload } from "react-icons/tfi";
import { BsDownload, BsFilter } from "react-icons/bs";
import { useEffect, useRef, useState } from 'react';
import Users from '../users/Users';
import Campaign from '../campaign/Campaign';
import Tables from '../tables/Tables';
import List from '../list/List';

const Home = () => {
    const [tab,setTab] = useState('users');
    // const [users,setUsers] = useState();
    const [query,setQuery] = useState('');
    
    const searchRef = useRef(null);

    useEffect(()=>{
        if(tab!='users')setQuery('');
        console.log(tab);
    },[tab])

    const handleSearch = () =>{
        const searchText = searchRef.current.value;
        console.log(searchText);
        searchRef.current.value='';
        setTab('users')
    }



    return (
        <div className='home-section'>
            <div className='home-nav'>
                <div className='home-nav-start'>
                    <ul className="home-nav-items">
                        <li onClick={()=>setTab('users')}>Users</li>
                        <li onClick={()=>setTab('campaign')}>Campaign</li>
                        <li onClick={()=>setTab('tables')}>Tables</li>
                        <li onClick={()=>setTab('list')}>List</li>
                    </ul>
                    <TfiReload className='reload-icon'></TfiReload>
                    <button className='download-btn'><BsDownload></BsDownload>Download</button>
                </div>
                <div>
                    <div className='home-nav-start'>
                        <input type="text" className='search-field' placeholder='Search for influencer' ref={searchRef}/>
                        <button className='search-btn' onClick={handleSearch}>Search</button>
                        <BsFilter className='filter-icn'></BsFilter>
                    </div>
                </div>
            </div>
            <div>
                {tab==='users' && <Users query={query}></Users>}
                {tab==='campaign' && <Campaign></Campaign>}
                {tab==='tables' && <Tables></Tables>}
                {tab==='list' && <List></List>}
            </div>
        </div>
    );
};

export default Home;