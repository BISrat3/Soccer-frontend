import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

function Search (props){
    // console.log(props)
    return(
        <Form className="d-flex" >
        {/* <FormControl type="search" placeholder="Search...."  className="me-2"
          aria-label="Search" onInput={ ()=>{
              {props.inputChange}
            } /> */}
            <input type="text" placeholder="Search..." onInput= {
                props.inputChange} 
            className="form-control input" value={props.search}/>
                <br />
            <Link to="/players/search/">
            <Button  onClick={props.handleSubmit} variant="outline-success">Search</Button>
            </Link>
      </Form>
    )
}

export default Search