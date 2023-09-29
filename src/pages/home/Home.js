import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../parts/sidebar/Sidebar';
import wallpaper1 from '../../assets/images/wallpaper1.jpg';
import HomeGrid from '../../components/HomeGrid';
import ProductView1 from '../../components/ProductView1';
import ProductView2 from '../../components/ProductView2';
import {AllProductData,sortResultsData,categoryProductsData} from '../../services/productApi';
import Loader from '../../components/Loader';
import './Home.css';

const Home = () => {
    const [gridView, setGridView] = React.useState(1)
    const [productsList, setproductsList] = React.useState([]);
    const [selectCategory, setSelectCategory] = React.useState("");
    const [selectSort, setSelectSort] = React.useState("");

    const handleClick = (val) => {
        setGridView(val)
    }
    async function fetchData () {
        const response = await AllProductData()
        setproductsList(response)
    }
    React.useEffect( ()=>{ 
        fetchData ()
    },[])

    //sort results function
    async function orderSortClick (value) {
        setSelectSort(value)
        let sortValue = value === "default" ? "asc" : value 
        if(selectCategory){
            const response = await categoryProductsData(selectCategory,sortValue)
            setproductsList(response)
        }
        else{
        const response = await sortResultsData(sortValue)
        setproductsList(response)
        }
    }

    //specific category function
    async function categoryOptionClick (value) {
        let categoryValue = value
        setSelectCategory(value)
        const response = await categoryProductsData(categoryValue)
        setproductsList(response)
    }
    
    return (
        <Container className='p-0 mt-5'>
            <Row className='p-0 m-0'>
                <Col xs={12}>
                    <img src={wallpaper1} alt="slider" className="w-100 rounded"/>
                </Col>
                <Col md={3} className='mt-4'>
                    <Sidebar selectCategory={selectCategory} categoryOptionClick={categoryOptionClick} orderSortClick={orderSortClick} selectSort={selectSort}/>
                </Col>
                <Col md={9} className='mt-4'>
                    <HomeGrid handleClick={handleClick}/>
                    {gridView === 1 ? <ProductView1 gridVal={gridView} productsList={productsList} /> : <ProductView2 gridVal={gridView} productsList={productsList} />}
                </Col>
            </Row>
      </Container>
    )
}

export default Home