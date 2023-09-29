import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiSearch } from "react-icons/fi";

function Search(){
    return(
        <InputGroup className='border border-2 rounded border-blue'>
        <Form.Control className="p-2 border-0"
          placeholder="Search for products..."
          aria-label="Search"
          aria-describedby="search"
        />
        <InputGroup.Text id="search" className='border-0 bg-white'><FiSearch/></InputGroup.Text>
      </InputGroup>
    )
}
export default Search