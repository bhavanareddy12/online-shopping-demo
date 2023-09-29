import React,{useContext} from 'react';
import Logo from '../../components/Logo';
import Location from '../../components/Location';
import Search from '../../components/Search';
import User from '../../components/User';
import Bag from '../../components/Bag';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate  } from 'react-router-dom';
import MiniCart from '../../components/miniCart/MiniCart';
import {clearLocalStorageFunc,getCartData} from '../../utils/localStoargeData';
import { StoreContext } from '../../App';
import './header.css';


function TopHeader({userName}){
    let navigate = useNavigate();
    const store = useContext(StoreContext)

    const [newClass, setNewClass] = React.useState("")

    //logout functionality
    const handleLogout = () => {
        clearLocalStorageFunc();
        navigate('/')
        window.location.reload()
    }
    React.useEffect(()=>{
        (async () => {
            let cartData =await getCartData();
        cartData = cartData.length
        await store.dispatch({type:"increment", value:cartData});
          })();
    },[])
    
    const addClassFunc = () =>{
        setNewClass("show")
        if(newClass === "show"){
            setNewClass("")
        }
    }
    return(
        <Container className='flex-column align-items-stretch pt-2'>
            <Row className='align-items-center'>
                <Col md={2} className="d-none d-md-block"><Navbar.Brand href="#"><Logo/></Navbar.Brand></Col>
                <Col md={2}>
                    {/* <Location/> */}
                </Col>
                <Col md={4}>
                    {/* <Search/> */}
                </Col>
                
                <Col  className='text-center'>
                    {/* <p className='m-0 color-blue'>$0.00</p> */}
                </Col>
                <Col className='d-md-flex justify-content-center'>
                    {userName ===''  ? <Link to='/my-account'><User/></Link> : 
                    <div className="dropdownUser">
                    <button className="dropbtn d-flex align-items-center"><User/>&nbsp;{userName}</button>
                    <div className='dropdown-content'>
                        <Link to='/'>Profile</Link>
                        <div className="submenu" onClick={handleLogout}>Logout</div>
                    </div>
                    </div>
                    }</Col>
                <Col  className='d-md-flex justify-content-center position-relative header-cart'>
                    <Bag addClassFunc={addClassFunc} count={store.state}/>
                    <MiniCart newClass={newClass}/>
                </Col>
            </Row>
        </Container>
    )
}

export default TopHeader