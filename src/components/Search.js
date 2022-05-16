import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Search (props){
    // console.log(props)
    return(
        <Form className="d-flex">
        <FormControl type="search" placeholder="Search...."  className="me-2"
          aria-label="Search"/>
        <Button variant="outline-success">Search</Button>
      </Form>
    )
}

export default Search