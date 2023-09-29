import React from 'react';
import Form from 'react-bootstrap/Form';
import CategoryCheckbox from '../../components/CategoryCheckbox';

function Sidebar(props){
    let sortArray =[{
        name:"Default select",
        value:'default'
    },{
        name:"ASC",
        value:'asc'
    },{
        name:"DESC",
        value:'desc'
    }]
    return (
        <aside>
            <CategoryCheckbox categoryOptionClick={props.categoryOptionClick} selectCategory={props.selectCategory}/>
            
            <h6 className='color-blue mt-5'>SORT PRODUCTS</h6>
            {
                sortArray.map((sort,i)=>{
                    return <Form.Check className='my-3' key={i}
                    type='checkbox' 
                    label={sort.name} 
                    checked={props.selectSort === sort.value} 
                    onChange={()=>props.orderSortClick(sort.value)}
                />
                })
            }
        </aside>
    )
}

export default Sidebar