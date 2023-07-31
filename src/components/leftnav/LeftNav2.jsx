import './leftNav.css'
import { FaUserShield } from "react-icons/fa";
import { CgHashtag } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import logo from '../../assets/logo.png';
// import { PiHashStraightBold } from "react-icons/pi";
const LeftNav2 = () => {
    return (
        <div className="leftnav-2">
            {/* <div className="leftnav-icon logo color-primary">V</div> */}
            <img src={logo} className='logo' alt="" />
            <div className='leftnav-menu'>
                <div className='leftnav-top-menus'>
                    <FaUserShield className='leftnav-menuItem-1 bg-primary'></FaUserShield>
                    {/* <p className='leftnav-menuItem'><FaUserShield className='leftnav-menuItem'></FaUserShield></p> */}
                    <CgHashtag className='leftnav-menuItem-2'></CgHashtag>
                    {/* <PiHashStraightBold></PiHashStraightBold> */}
                </div>
                <div className='leftnav-bottom-menus'>
                    <FiSettings className='leftnav-menuItem-2'></FiSettings>
                </div>
            </div>
        </div>
    );
};

export default LeftNav2;