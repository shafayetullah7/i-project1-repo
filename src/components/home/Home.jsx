import './home.css'
import { TfiReload } from "react-icons/tfi";
import { BsDownload, BsFilter } from "react-icons/bs";
import { useEffect, useRef, useState } from 'react';
import Users from '../users/Users';
import Campaign from '../campaign/Campaign';
import Tables from '../tables/Tables';
import List from '../list/List';
import spinner4 from '../../assets/spinner4.svg';

const Home = () => {
    const [tab,setTab] = useState('users');
    const [query,setQuery] = useState('');
    const searchRef = useRef(null);
    const [loading,setLoading] = useState(true);


    const loadOff = () =>{
        setLoading(false);
    }

    useEffect(()=>{
        if(tab!='users')setQuery('');
        console.log(tab);
    },[tab])

    const handleSearch = () =>{
        const searchText = searchRef.current.value;
        if(!searchText)return;
        // console.log(searchText);
        setQuery(searchText);
        searchRef.current.value='';
        setLoading(true)
        setTab('users');
    }

    const reload = () =>{
        setQuery('');
    }



    return (
        <div className='home-section'>
            <div className='home-nav'>
                <div className='home-nav-start'>
                    <ul className="home-nav-items">
                        <li onClick={()=>setTab('users')} className={`${tab==='users'?'home-nav-active':'home-nav-item'}`}>Users</li>
                        <li onClick={()=>setTab('campaign')} className={`${tab==='campaign'?'home-nav-active':'home-nav-item'}`}>Campaign</li>
                        <li onClick={()=>setTab('tables')} className={`${tab==='tables'?'home-nav-active':'home-nav-item'}`}>Tables</li>
                        <li onClick={()=>setTab('list')} className={`${tab==='list'?'home-nav-active':'home-nav-item'}`}>List</li>
                    </ul>
                    <TfiReload className='reload-icon' onClick={reload}></TfiReload>
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
            <div className='home-content'>
                {loading && <img src={spinner4} className='spinner' alt='loading'/>}
                {tab==='users' && <Users query={query} loadOff={loadOff}></Users>}
                {tab==='campaign' && <Campaign></Campaign>}
                {tab==='tables' && <Tables></Tables>}
                {tab==='list' && <List></List>}
            </div>
        </div>
    );
};

export default Home;