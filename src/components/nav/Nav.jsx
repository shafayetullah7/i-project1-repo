import './Nav.css';
import avatar from '../../assets/avatar.png'

const Nav = () => {
    return (
        <div className="nav">
            <div className='nav-profile'>
                <img src={avatar} className='avatar' alt="avatar" />
                <div>
                    <p className='nav-profile-name'>ChethanB</p>
                    <p className='nav-profile-title'>Brand</p>
                </div>
            </div>
        </div>
    );
};

export default Nav;