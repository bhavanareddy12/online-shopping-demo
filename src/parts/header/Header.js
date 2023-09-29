import React,{useContext} from "react";
import { Navbar,Nav ,Container,Row,Col} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom'
import { AiFillHome, AiFillShop, AiFillHeart} from "react-icons/ai";
import { RiAccountPinCircleFill, RiContactsBook2Fill } from "react-icons/ri";
import { IoCartSharp } from 'react-icons/io5'
import TopHeader from "./TopHeader";
import Logo from '../../components/Logo';
import {AllUsersData} from '../../services/usersAPi';
import User from '../../components/User';
import Bag from '../../components/Bag';
import MiniCart from '../../components/miniCart/MiniCart';
import { StoreContext } from '../../App';
import {getUserNameFunc,userIdFunc,clearLocalStorageFunc,getCartData} from '../../utils/localStoargeData';
import './header.css';


function Header(){
    
    
    let navigate = useNavigate();
    const store = useContext(StoreContext)

    const [newClass, setNewClass] = React.useState("")
    const[userData, setUserData] = React.useState({})

    //user data function
    const userDataFunc = async(name) => {
        const response = await AllUsersData()
        const data = response.length > 0 && response.filter(user=>user.username === name)
        userIdFunc(data[0].id)
        setUserData(data[0])
    }
    React.useEffect(()=>{
        //user data getting function calling
    const name = getUserNameFunc()
    if(name !== '' && name !==null){
      userDataFunc(name)
    }

    },[userData])    

    React.useEffect(()=>{
        (async () => {
            let cartData =await getCartData();
        cartData = cartData.length
        await store.dispatch({type:"increment", value:cartData});
          })();
    },[])

    //logout functionality
    const handleLogout = () => {
        clearLocalStorageFunc();
        navigate('/')
        window.location.reload()
    }
    
    const addClassFunc = () =>{
        setNewClass("show")
        if(newClass === "show"){
            setNewClass("")
        }
    }
    
    return(
        <header>
            <Navbar className='d-flex flex-column' bg="white" expand="lg">
            {/* <Container className='flex-column align-items-stretch pt-2'>
            <Row className='align-items-center'>
                
                
            </Row>
        </Container> */}
                {/* <TopHeader userName={userData.username ==='' || userData.username === undefined ? '' : userData.username}/> */}
                <div className='py-2'>
        <Link to="/" className='d-md-none d-block'><Logo/></Link>
        <Row className='align-items-center'>
        <Col md={2} className="d-none d-md-block"><Navbar.Brand href="#"><Logo/></Navbar.Brand></Col>
        <Col md={8}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='px-md-3 py-md-2'><AiFillHome/> Home</Link>
            <Link to="/shop" className='px-md-3 py-md-2'><AiFillShop/> Shop</Link>
            <Link to="/cart" className='px-md-3 py-md-2'><IoCartSharp/>
              Checkout
            </Link>
            <Link to="/wishlist" className='px-md-3 py-md-2'><AiFillHeart/>
              Wishlist
            </Link>
            <Link to="/my-account" className='px-md-3 py-md-2'>
              <RiAccountPinCircleFill/>My account
            </Link>
            <Link to="/contact" className='px-md-3 py-md-2'><RiContactsBook2Fill/>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
        </Col>
        <Col md={1} className='d-md-flex justify-content-center'>
                    {userData.username ===''  ? <Link to='/my-account'><User/></Link> : 
                    <div className="dropdownUser">
                    <button className="dropbtn d-flex align-items-center"><User/>&nbsp;{userData.username}</button>
                    {Object.keys(userData).length > 0 && (<div className='dropdown-content'>
                        {/* <Link to='/'>Profile</Link> */}
                        <div className="submenu" onClick={handleLogout}>Logout</div>
                    </div>)}
                    </div>
                    }</Col>
                <Col md={1} className='d-md-flex justify-content-center position-relative header-cart'>
                    <Bag addClassFunc={addClassFunc} count={store.state}/>
                    <MiniCart newClass={newClass} count={store.state}/>
                </Col>
        </Row>
      </div>
            </Navbar>
        </header>
    )
}
export default Header