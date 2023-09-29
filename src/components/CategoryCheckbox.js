import React from 'react';
import Form from 'react-bootstrap/Form';
import {AllCategoriesData} from '../services/categoryApi';

const CategoryCheckbox = ({categoryOptionClick,selectCategory}) => {
    const [categories, setCategories] = React.useState([])

    async function fetchCategories () {
        const response =  await AllCategoriesData()
        setCategories(response)
    }

    React.useEffect(()=>{
        fetchCategories()
    },[])
    return (
        <>
            <h6 className="mb-3 color-blue">PRODUCT CATEGORIES</h6>
            <Form>
                {categories.length > 0 && categories.map((category,index)=>{
                    return <Form.Check className='my-3' key={index}
                    type='checkbox'
                    id={category}
                    label={category} checked={selectCategory === category} onChange={()=>categoryOptionClick(category)}
                />
                })
                }
            </Form>
        </>
    )
}

export default CategoryCheckbox
