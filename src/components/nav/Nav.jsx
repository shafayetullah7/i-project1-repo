import './Nav.css';
import avatar from '../../assets/avatar.png';
import { FiChevronDown } from "react-icons/fi";
import HiddenLeftNav from '../hiddenLeftNav/HiddenLeftNav';

const Nav = () => {
    return (
        <div className="nav">
            <HiddenLeftNav></HiddenLeftNav>
            <div className='nav-profile'>
                <img src={avatar} className='avatar' alt="avatar" />
                <div>
                    <p className='nav-profile-name'>ChethanB</p>
                    <p className='nav-profile-title'>Brand</p>
                </div>
                <FiChevronDown className='nav-profile-expand-icon'></FiChevronDown>
            </div>
        </div>
    );
};

export default Nav;