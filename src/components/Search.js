import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

function Search (props){
    // console.log(props)
    return(
        <div className="search form">
            <Form className="d-flex" >
            <FormControl
                type="search" onInput={props.inputChange} 
                placeholder="Search"
                className="me-2"
                aria-label="Search"
             required value={props.search}/>
            {/* <input type="text" placeholder="Search..." onInput= {
                props.inputChange} 
                className="form-control input" value={props.search} /> */}
            <Link to="/players/search/">
                <br />
            <Button  onClick={props.handleSubmit} variant="outline-success" className="btn">Search</Button>
            </Link>
            </Form>
        </div>   
    )
}

export default Search