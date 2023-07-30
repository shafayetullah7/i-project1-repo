import Home from '../home/Home';
import LeftNav from '../leftnav/LeftNav';
import Nav from '../nav/Nav';
import './main.css';
const Main = () => {
    return (
        <div className="main">
            
            <LeftNav></LeftNav>
            <div className='main-content'>
                <Nav></Nav>
                <div>
                    <Home></Home>
                </div>
            </div>
            

        </div>
    );
};

export default Main;